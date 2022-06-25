import { Module } from 'vuex'
import type { IRootState } from '../types'
import type { ILoginState } from './types'
import type {
  IAccount,
  IUserInfoResult,
  IUserMenus
} from '@/service/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {} as IUserInfoResult,
      userMenus: [] as unknown as IUserMenus,
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: IUserInfoResult) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: IUserMenus) {
      state.userMenus = userMenus
      const dynamicRoutes = mapMenusToRoutes(userMenus)
      dynamicRoutes.forEach((route) => router.addRoute('main', route))
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1. 实现登录逻辑 保存token至store
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 初始化数据(role/department)
      dispatch('getInitialDataAction', null, { root: true })
      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // 4. 跳转到首页
      router.push('/main')
    },
    async phoneLoginAction({}, payload) {
      console.log(payload)
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
      }
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
