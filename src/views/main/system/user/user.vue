<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @tableDataUpdate="handleTableDataUpdate"
    />
    <PageContent
      ref="pageContentRef"
      :moduleName="'system'"
      :pageName="'user'"
      :contentTableConfig="contentTableConfig"
      @showModal="handleModalChange"
    >
      <template #enable="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '停用'
        }}</el-tag>
      </template>
    </PageContent>
    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import type { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const updateFn = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      ) as IFormItem
      passwordItem.isHidden = true
    }
    const createFn = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      ) as IFormItem
      passwordItem.isHidden = false
    }
    const [pageContentRef, handleTableDataUpdate] = usePageSearch()
    const [pageModalRef, defaultInfo, handleModalChange] = usePageModal(
      updateFn,
      createFn
    )
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      handleTableDataUpdate,
      handleModalChange,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
