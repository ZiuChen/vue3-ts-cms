import type { IUserList, IRoleList } from '@/service/main/system/type'

export interface ISystemState {
  userList: IUserList
  userCount: number
  roleList: IRoleList
  roleCount: number
}

export type TQueryInfo = {
  [key: string]: any
}

export interface IPayLoad {
  pageName: string
  queryInfo: TQueryInfo
}

export interface IPageMap {
  [key: string]: any
}
