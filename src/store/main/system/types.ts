import type { IUserList, IRoleList } from '@/service/main/system/type'

export interface ISystemState {
  userList: IUserList
  userCount: number
  roleList: IRoleList
  roleCount: number
}
