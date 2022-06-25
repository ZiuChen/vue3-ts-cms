import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleModalChange = (payload: undefined | any) => {
    if (!pageModalRef.value) return
    if (payload) {
      /* update */
      pageModalRef.value.dialogVisible = true
      defaultInfo.value = { ...payload }
    } else {
      /* create */
      pageModalRef.value.dialogVisible = true
      defaultInfo.value = {}
    }
  }
  return [pageModalRef, defaultInfo, handleModalChange]
}
