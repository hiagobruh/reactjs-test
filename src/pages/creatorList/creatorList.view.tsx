import React from 'react'
import styled from 'styled-components'
import Card, { CardProps } from '../../components/card'
import PageHeader from '../../components/pageHeader'

export type CreatorCard = CardProps & { id: string }

interface CreatorListViewProps {
  isLoading: boolean
  creators: CreatorCard[]
  error?: Error | null
}

const CreatorListViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`

const CreatorListMain = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2px 0;
    max-width: 740px;
  }
`

function CreatorListView({ isLoading, creators, error }: CreatorListViewProps) {
  return (
    <CreatorListViewWrapper>
      <PageHeader
        title='Lista de criadores'
        description='Lista de criadores da Marvel diretamente da Marvel API'
      />

      <CreatorListMain>
        {!isLoading && !error
          ? creators.map(({ id, ...creator }) => <Card key={id} {...creator} />)
          : null}
      </CreatorListMain>
    </CreatorListViewWrapper>
  )
}

export default CreatorListView
