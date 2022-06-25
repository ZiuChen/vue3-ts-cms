import { useStore } from 'vuex'
import { ref, watchEffect, computed } from 'vue'
import type { TQueryInfo } from '@/store/types'

export function useModuleListData(moduleName: string, pageName: string) {
  const store = useStore()
  const pageInfo = ref({
    currentPage: 1,
    pageSize: 25
  })
  const fetchTableData = (queryInfo: TQueryInfo = {}) => {
    store.dispatch(moduleName + '/getPageListAction', {
      pageName,
      queryInfo: {
        offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
        size: pageInfo.value.pageSize,
        ...queryInfo
      }
    })
  }
  watchEffect(() => fetchTableData())
  const dataList = computed(() =>
    store.getters[moduleName + '/getListData'](pageName)
  )
  const dataTotalCount = computed(() =>
    store.getters[moduleName + '/getTotalCount'](pageName)
  )
  return { fetchTableData, dataList, dataTotalCount, pageInfo }
}
