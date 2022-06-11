import { IAccount, IDataType, ILoginResult } from './type'
import zuRequest from '../index'

enum LoginAPI {
  AccountLogin = '/Login'
}

export default function accountLoginRequest(account: IAccount) {
  return zuRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
