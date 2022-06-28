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

export function deletePageData(url: string) {
  return ZURequest.delete<IDataType<any>>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return ZURequest.post<IDataType<any>>({
    url,
    data: newData
  })
}

export function updatePageData(url: string, updateData: any) {
  return ZURequest.post<IDataType<any>>({
    url,
    data: updateData
  })
}
