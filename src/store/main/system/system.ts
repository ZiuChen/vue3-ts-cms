import type { Module } from 'vuex'
import type { ISystemState } from './types'
import type { IRootState } from '../../types'
import type { IUserList } from '@/service/main/system/type'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: IUserList) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { data } = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
