import type { IUserInfoResult, IUserMenus } from '@/service/login/type'

export interface ILoginState {
  token: string
  userInfo: IUserInfoResult
  userMenus: IUserMenus
}
