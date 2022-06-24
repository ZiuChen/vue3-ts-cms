import type { Store } from 'vuex'
import type { IPayLoad, IPageMap } from '@/store/types'
import { getPageListData } from '@/service/main/system/system'
import { upperInitialCharacter } from '@/utils/upper-initial-character'

const PageMap: IPageMap = {
  /* system */
  user: '/users/list',
  role: '/role/list',
  menu: '/menu/list',
  /* product */
  good: '/goods/list'
}

export const getPageListAction = async (
  { commit }: Store<any>,
  payload: IPayLoad
) => {
  const { pageName, queryInfo } = payload
  const pageUrl = PageMap[pageName]
  const { data } = await getPageListData(pageUrl, queryInfo)
  const { list, totalCount } = data
  // commit to mutations
  commit(`change${upperInitialCharacter(pageName)}List`, list)
  commit(`change${upperInitialCharacter(pageName)}Count`, totalCount)
}
