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

export interface IListResult {
  list: IUserList
  totalCount: number
}
