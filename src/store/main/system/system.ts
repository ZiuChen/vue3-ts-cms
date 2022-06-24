import type { Module } from 'vuex'
import type { ISystemState } from './types'
import type { IRootState } from '@/store/types'
import type {
  IUserList,
  IRoleList,
  IMenuList
} from '@/service/main/system/type'
import { getPageListAction } from '@/hooks/getPageListAction'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0
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
          case 'menu':
            return state.menuList
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
          case 'menu':
            return state.menuCount
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
    },
    changeMenuList(state, menuList: IMenuList) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    getPageListAction
  } as any
}

export default systemModule
