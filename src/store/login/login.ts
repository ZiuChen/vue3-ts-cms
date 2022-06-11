import { Module } from 'vuex'
import type { IRootState } from '../types'
import type { ILoginState } from './types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  }
}

export default loginModule
