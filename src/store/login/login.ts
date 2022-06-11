import { Module } from 'vuex'
import type { IRootState } from '../types'
import type { ILoginState } from './types'
import type { IAccount } from '@/service/login/type'
import accountLoginRequest from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    },
    phoneLoginAction({ commit }, payload) {
      console.log(payload)
    }
  }
}

export default loginModule
