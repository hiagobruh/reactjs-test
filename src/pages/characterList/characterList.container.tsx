import React, { useEffect, useState } from 'react'
import CharacterListView, { CharacterCard } from './characterList.view'
import useApi from '../../hooks/api'
import getMarvelCharacters from '../../services/marvelCharacter'
import { dateToBrFormat } from '../../utils/datetime'

function CharacterListContainer() {
  const [characters, setCharacters] = useState<CharacterCard[]>([])
  const [characterListResult] = useApi(getMarvelCharacters, { offset: 0 })

  useEffect(() => {
    if (!characterListResult.data) {
      return
    }

    const characterList: CharacterCard[] = characterListResult.data.map(character => ({
      id: character.id,
      title: character.name,
      avatarSource: character.thumbnail
        ? `${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`
        : null,
      description: character.description,
      footerInformation: {
        description: 'Modificado em',
        value: dateToBrFormat(new Date(character.updatedAt)),
      },
    }))

    setCharacters(characterList)
  }, [characterListResult.data])

  return (
    <CharacterListView
      isLoading={characterListResult.isLoading}
      characters={characters}
      error={characterListResult.error}
    />
  )
}

export default CharacterListContainer
