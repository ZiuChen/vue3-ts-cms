import type {
  IUserList,
  IRoleList,
  IMenuList,
  IDepartmentList
} from '@/service/main/system/type'

export interface ISystemState {
  userList: IUserList
  userCount: number
  roleList: IRoleList
  roleCount: number
  menuList: IMenuList
  menuCount: number
  departmentList: IDepartmentList
  departmentCount: number
}
