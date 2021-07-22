import React from 'react'
import styled from 'styled-components'
import Card, { CardProps } from '../../components/card'
import PageHeader from '../../components/pageHeader'

export type CharacterCard = CardProps & { id: string }

interface CharacterListViewProps {
  isLoading: boolean
  characters: CharacterCard[]
  error?: Error | null
}

const CharacterListViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`

const CharacterListMain = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2px 0;
    max-width: 740px;
  }
`

function CharacterListView({ isLoading, characters, error }: CharacterListViewProps) {
  return (
    <CharacterListViewWrapper>
      <PageHeader
        title='Lista de personagens'
        description='Lista de personagens da Marvel diretamente da Marvel API'
      />

      <CharacterListMain>
        {!isLoading && !error
          ? characters.map(({ id, ...character }) => <Card key={id} {...character} />)
          : null}
      </CharacterListMain>
    </CharacterListViewWrapper>
  )
}

export default CharacterListView
