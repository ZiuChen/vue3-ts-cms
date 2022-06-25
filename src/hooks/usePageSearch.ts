import { ref } from 'vue'
import PageContent from '@/components/page-content'
import type { TQueryInfo } from '@/store/types'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleTableDataUpdate = (queryInfo: TQueryInfo) => {
    pageContentRef.value?.fetchTableData(queryInfo)
  }
  return [pageContentRef, handleTableDataUpdate]
}
