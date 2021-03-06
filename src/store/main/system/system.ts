import type { Module } from 'vuex'
import type { ISystemState } from './types'
import type { IRootState } from '@/store/types'
import type {
  IUserList,
  IRoleList,
  IMenuList,
  IDepartmentList
} from '@/service/main/system/type'
import { getPageListAction } from '@/store/actions/getPageListAction'
import {
  deletePageData,
  createPageData,
  updatePageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0
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
          case 'department':
            return state.departmentList
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
          case 'department':
            return state.departmentCount
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
    },
    changeDepartmentList(state, departmentList: IDepartmentList) {
      state.departmentList = departmentList
    },
    changeDepartmentCount(state, departmentuCount: number) {
      state.departmentCount = departmentuCount
    }
  },
  actions: {
    getPageListAction,
    async deletePageDataAction({ dispatch }: any, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 25
        }
      })
    },
    async createPageDataAction({ dispatch }: any, payload: any) {
      const { pageName, createData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, createData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 25
        }
      })
    },
    async updatePageDataAction({ dispatch }: any, payload: any) {
      const { pageName, updateData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await updatePageData(pageUrl, updateData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 25
        }
      })
    }
  } as any
}

export default systemModule
