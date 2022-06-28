export type IUserList = {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}[]

export type IRoleList = {
  [key: string]: any
}[]

export type IMenuList = {
  [key: string]: any
}[]

export type IDepartmentList = {
  [key: string]: any
}[]

export type IGoodList = {
  [key: string]: any
}[]

export interface IListResult {
  list: IUserList | IRoleList | IGoodList
  totalCount: number
}
