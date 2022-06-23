import type { IUserList, IRoleList } from '@/service/main/system/type'
import type { TQueryInfo } from '@/store/types'

export interface ISystemState {
  userList: IUserList
  userCount: number
  roleList: IRoleList
  roleCount: number
}

export interface IPayLoad {
  pageName: string
  queryInfo: TQueryInfo
}

export interface IPageMap {
  [key: string]: any
}
