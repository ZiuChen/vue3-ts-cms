import { IAccount, IDataType, ILoginResult, IUserInfoResult } from './type'
import zuRequest from '../index'

enum LoginAPI {
  AccountLogin = '/Login',
  LoginUserInfo = '/user/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return zuRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return zuRequest.get<IDataType<IUserInfoResult>>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return zuRequest.get<IDataType<any>>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
