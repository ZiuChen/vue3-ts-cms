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
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'user',
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
