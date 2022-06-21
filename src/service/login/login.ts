import type { IDataType } from '../types'
import type {
  IAccount,
  ILoginResult,
  IUserInfoResult,
  IUserMenus
} from './type'
import zuRequest from '../index'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return zuRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: true
  })
}

export function requestUserInfoById(id: number) {
  return zuRequest.get<IDataType<IUserInfoResult>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: true
  })
}

export function requestUserMenusByRoleId(id: number) {
  return zuRequest.get<IDataType<IUserMenus>>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: true
  })
}
