import type { Module } from 'vuex'
import type { IRootState } from '../../types'
import type { IProductState } from './types'
import type { IGoodItem } from './good/types'
import type { IPayLoad } from '../system/types'
import { getPageListData } from '@/service/main/system/system'
import { upperInitialCharacter } from '@/utils/upper-initial-character'

const PageMap: any = {
  good: '/goods/list'
}
const productModule: Module<IProductState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodList: [],
      goodCount: 0
    }
  },
  getters: {
    getListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'good':
            return state.goodList
        }
      }
    },
    getTotalCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'good':
            return state.goodCount
        }
      }
    }
  },
  mutations: {
    changeGoodList(state, goodList: IGoodItem[]) {
      state.goodList = goodList
    },
    changeGoodCount(state, goodCount: number) {
      state.goodCount = goodCount
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

export default productModule
