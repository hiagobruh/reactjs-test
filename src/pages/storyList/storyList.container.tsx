import React, { useEffect, useState } from 'react'
import StoryListView, { StoryCard } from './storyList.view'
import useApi from '../../hooks/api'
import getMarvelStories from '../../services/marvelStories'
import { dateToBrFormat } from '../../utils/datetime'

function StoryListContainer() {
  const [stories, setStories] = useState<StoryCard[]>([])
  const [storyListResult] = useApi(getMarvelStories, { offset: 0 })

  useEffect(() => {
    if (!storyListResult.data) {
      return
    }

    const storyList: StoryCard[] = storyListResult.data.map(story => ({
      id: story.id,
      title: story.title,
      subtitle: story.type,
      avatarSource: story.thumbnail
        ? `${story.thumbnail.path}/portrait_medium.${story.thumbnail.extension}`
        : null,
      description: story.description,
      footerInformation: {
        description: 'Modificado em',
        value: dateToBrFormat(new Date(story.updatedAt)),
      },
    }))

    setStories(storyList)
  }, [storyListResult.data])

  return (
    <StoryListView
      isLoading={storyListResult.isLoading}
      stories={stories}
      error={storyListResult.error}
    />
  )
}

export default StoryListContainer
