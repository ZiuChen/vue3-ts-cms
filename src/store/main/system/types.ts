import type {
  IUserList,
  IRoleList,
  IMenuList
} from '@/service/main/system/type'

export interface ISystemState {
  userList: IUserList
  userCount: number
  roleList: IRoleList
  roleCount: number
  menuList: IMenuList
  menuCount: number
}
