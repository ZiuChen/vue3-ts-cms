import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = (payload?: any) => void

export function usePageModal(updateFn?: CallBackFn, createFn?: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleModalChange = (payload: undefined | any) => {
    if (!pageModalRef.value) return
    if (payload) {
      /* update */
      pageModalRef.value.dialogVisible = true
      defaultInfo.value = { ...payload }
      updateFn && updateFn(payload)
    } else {
      /* create */
      pageModalRef.value.dialogVisible = true
      defaultInfo.value = {}
      createFn && createFn()
    }
  }
  return [pageModalRef, defaultInfo, handleModalChange]
}
