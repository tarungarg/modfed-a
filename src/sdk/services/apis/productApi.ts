import { FetchRequestType, HTTPVerbs, fetchRequest } from '@myshop/core'
import type { OptionalFetchRequestTypeOptions } from '@myshop/core'

import { GetProductDataPath } from './apiConstants'

export const getProductDataAPI = <T>({ options }: { options?: OptionalFetchRequestTypeOptions }): T => {
  const req: FetchRequestType = {
    path: GetProductDataPath,
    options: {
      method: HTTPVerbs.GET,
      ...options,
    },
  }

  return makeRequest<T>(req)
}

function makeRequest<T>(req: FetchRequestType): T {
  return fetchRequest(req) as T
}
