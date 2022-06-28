<template>
  <div class="role">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @tableDataUpdate="handleTableDataUpdate"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :pageName="'department'"
      :moduleName="'system'"
      :contentTableConfig="contentTableConfig"
      @showModal="handleModalChange"
    ></PageContent>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      :pageName="'department'"
    >
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleTableDataUpdate] = usePageSearch()
    const [pageModalRef, defaultInfo, handleModalChange] = usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      handleTableDataUpdate,
      pageModalRef,
      defaultInfo,
      handleModalChange
    }
  }
})
</script>

<style lang="less" scoped></style>
