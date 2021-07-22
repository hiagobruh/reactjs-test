import React from 'react'
import styled from 'styled-components'
import Card, { CardProps } from '../../components/card'
import PageHeader from '../../components/pageHeader'

export type StoryCard = CardProps & { id: string }

interface StoryListViewProps {
  isLoading: boolean
  stories: StoryCard[]
  error?: Error | null
}

const StoryListViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`

const StoryListMain = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2px 0;
    max-width: 740px;
  }
`

function StoryListView({ isLoading, stories, error }: StoryListViewProps) {
  return (
    <StoryListViewWrapper>
      <PageHeader
        title='Lista de histórias'
        description='Lista de histórias da Marvel diretamente da Marvel API'
      />

      <StoryListMain>
        {!isLoading && !error
          ? stories.map(({ id, ...story }) => <Card key={id} {...story} />)
          : null}
      </StoryListMain>
    </StoryListViewWrapper>
  )
}

export default StoryListView
