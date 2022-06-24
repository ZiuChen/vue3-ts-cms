import ZURequest from '../../index'
import type { IDataType } from '../../types'
import type { IListResult } from './type'

export function getPageListData(url: string, queryInfo: any) {
  return ZURequest.post<IDataType<IListResult>>({
    url: url,
    data: queryInfo,
    showLoading: true
  })
}
