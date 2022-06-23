<template>
  <div class="goods">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @tableDataUpdate="handleTableDataUpdate"
    >
    </PageSearch>
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :moduleName="'product'"
      :pageName="'good'"
    >
      <template #status="scope">
        <el-tag :type="scope.row.status ? 'success' : 'danger'">{{
          scope.row.status ? '启用' : '停用'
        }}</el-tag>
      </template>
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :lazy="true"
          :preview-src-list="[scope.row.imgUrl]"
          :preview-teleported="true"
          :hide-on-click-modal="true"
        ></el-image>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'goods',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleTableDataUpdate] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleTableDataUpdate
    }
  }
})
</script>

<style scoped></style>
