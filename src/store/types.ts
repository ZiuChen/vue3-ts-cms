import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IProductState } from './main/product/types'
export interface IRootState {
  name: string
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  product: IProductState
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

export type IStoreType = IRootState & IRootWithModule
