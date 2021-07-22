import { useEffect, useState } from 'react'
import { ApiAnswer } from '../services/api'
import { GenericObject } from '../utils/object'

interface RequestState<RequestData extends GenericObject> extends ApiAnswer<RequestData> {
  isLoading: boolean
}

interface ApiControl {
  reload: () => void
}

export default function useApi<RequestParams extends GenericObject, ApiData extends GenericObject>(
  apiRequestFunction: (params?: RequestParams) => Promise<ApiAnswer<ApiData>>,
  params?: RequestParams,
): [RequestState<ApiData>, ApiControl] {
  const [requestState, setRequestState] = useState<RequestState<ApiData>>({
    isLoading: true,
  })

  const load = () => {
    if (!requestState.isLoading) {
      setRequestState({
        isLoading: true,
      })
    }

    apiRequestFunction(params)
      .then(response =>
        setRequestState({
          ...response,
          isLoading: false,
        }),
      )
      .catch((error: Error) => setRequestState({ error, isLoading: false }))
  }

  useEffect(() => {
    load()
  }, [])

  return [requestState, { reload: load }]
}
