import { GenericObject } from '../utils/object'
import { ApiAnswer } from './api'
import marvelApi from './marvelApi'

interface GetMarvelStoriesOptions {
  offset?: number
}

interface Story {
  id: string
  title: string
  description: string | null
  type: string | null
  updatedAt: string
  thumbnail: {
    path: string
    extension: string
  }
}

export default async function getMarvelStories({
  offset = 0,
}: GetMarvelStoriesOptions = {}): Promise<ApiAnswer<Story[]>> {
  try {
    const { data: result }: { data: { data: { results: GenericObject[] } } } = await marvelApi.get(
      '/v1/public/stories',
      { params: { offset } },
    )

    console.info(result)

    const stories: Story[] = result.data?.results?.map(character => ({
      id: character.id,
      title: character.title,
      description: character.description ?? null,
      type: character.type ?? null,
      thumbnail: character.thumbnail,
      updatedAt: character.modified,
    }))

    return { data: stories }
  } catch (error) {
    return { error }
  }
}
