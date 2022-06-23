import type { Module } from 'vuex'
import type { IRootState } from '@/store/types'
import type { IProductState } from './types'
import type { IGoodItem } from './good/types'
import { getPageListAction } from '@/hooks/getPageListAction'

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
    getPageListAction
  } as any
}

export default productModule
