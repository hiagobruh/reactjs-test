import { GenericObject } from '../utils/object'
import { ApiAnswer } from './api'
import marvelApi from './marvelApi'

interface GetMarvelCharactersOptions {
  offset?: number
}

interface Character {
  id: string
  name: string
  description: string | null
  updatedAt: string
  thumbnail: {
    path: string
    extension: string
  }
}

export default async function getMarvelCharacters({
  offset = 0,
}: GetMarvelCharactersOptions = {}): Promise<ApiAnswer<Character[]>> {
  try {
    const { data: result }: { data: { data: { results: GenericObject[] } } } = await marvelApi.get(
      '/v1/public/characters',
      { params: { offset } },
    )

    const characters: Character[] = result.data?.results?.map(character => ({
      id: character.id,
      name: character.name,
      description: character.description ?? null,
      thumbnail: character.thumbnail,
      updatedAt: character.modified,
    }))

    return { data: characters }
  } catch (error) {
    return { error }
  }
}
