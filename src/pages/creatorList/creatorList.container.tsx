import React, { useEffect, useState } from 'react'
import CreatorListView, { CreatorCard } from './creatorList.view'
import useApi from '../../hooks/api'
import getMarvelCreators from '../../services/marvelCreators'
import { dateToBrFormat } from '../../utils/datetime'

function CreatorListContainer() {
  const [creators, setCreators] = useState<CreatorCard[]>([])
  const [creatorListResult] = useApi(getMarvelCreators, { offset: 0 })

  useEffect(() => {
    if (!creatorListResult.data) {
      return
    }

    const creatorList: CreatorCard[] = creatorListResult.data.map(creator => ({
      id: creator.id,
      title: creator.fullName,
      avatarSource: creator.thumbnail
        ? `${creator.thumbnail.path}/portrait_medium.${creator.thumbnail.extension}`
        : null,
      footerInformation: {
        description: 'Modificado em',
        value: dateToBrFormat(new Date(creator.updatedAt)),
      },
    }))

    setCreators(creatorList)
  }, [creatorListResult.data])

  return (
    <CreatorListView
      isLoading={creatorListResult.isLoading}
      creators={creators}
      error={creatorListResult.error}
    />
  )
}

export default CreatorListContainer
