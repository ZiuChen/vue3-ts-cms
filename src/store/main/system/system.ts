import type { Module } from 'vuex'
import type { ISystemState, IPayLoad, IPageMap } from './types'
import type { IRootState } from '../../types'
import type { IUserList, IRoleList } from '@/service/main/system/type'
import { getPageListData } from '@/service/main/system/system'
import { upperInitialCharacter } from '@/utils/upper-initial-character'

const PageMap: IPageMap = {
  user: '/users/list',
  role: '/role/list'
}
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    getListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    },
    getTotalCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userCount
          case 'role':
            return state.roleCount
        }
      }
    }
  },
  mutations: {
    changeUserList(state, userList: IUserList) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: IRoleList) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IPayLoad) {
      const { pageName, queryInfo } = payload
      const pageUrl = PageMap[pageName]
      const { data } = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = data
      // commit to mutations
      commit(`change${upperInitialCharacter(pageName)}List`, list)
      commit(`change${upperInitialCharacter(pageName)}Count`, totalCount)
    }
  }
}

export default systemModule
