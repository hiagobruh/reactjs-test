import { GenericObject } from '../utils/object'

export interface ApiAnswer<ApiData extends GenericObject> {
  data?: ApiData
  error?: Error
}
