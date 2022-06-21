import { ref } from 'vue'
import type PageContent from '@/components/page-content'
import type { TQueryInfo } from '@/store/main/system/types'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleTableDataUpdate = (queryInfo: TQueryInfo) => {
    pageContentRef.value?.fetchTableData(queryInfo)
  }
  return [pageContentRef, handleTableDataUpdate]
}