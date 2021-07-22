import { GenericObject } from '../utils/object'
import { ApiAnswer } from './api'
import marvelApi from './marvelApi'

interface GetMarvelCreatorsOptions {
  offset?: number
}

interface Creator {
  id: string
  firstName: string
  middleName: string | null
  lastName: string
  fullName: string
  updatedAt: string
  thumbnail: {
    path: string
    extension: string
  } | null
}

export default async function getMarvelCreators({
  offset = 0,
}: GetMarvelCreatorsOptions = {}): Promise<ApiAnswer<Creator[]>> {
  try {
    const { data: result }: { data: { data: { results: GenericObject[] } } } = await marvelApi.get(
      '/v1/public/creators',
      { params: { offset } },
    )

    const creators: Creator[] = result.data?.results?.map(character => ({
      id: character.id,
      firstName: character.firstName,
      middleName: character.middleName ?? null,
      lastName: character.lastName ?? null,
      fullName: character.fullName,
      thumbnail: character.thumbnail,
      updatedAt: character.modified,
    }))

    return { data: creators }
  } catch (error) {
    return { error }
  }
}
