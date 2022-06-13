export interface IAccount {
  name: string
  password: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
}

export interface Department {
  id: number
  name: string
  parentId: any
  createAt: string
  updateAt: string
  leader: string
}

export interface IUserInfoResult {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: Role
  department: Department
}

export interface IUserMenus {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: ISubMenu
}
;[]

export interface ISubMenu {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children: any
  parentId: number
}
