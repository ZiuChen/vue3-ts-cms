<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @tableDataUpdate="handleTableDataUpdate"
    />
    <PageContent
      ref="pageContentRef"
      :pageName="'user'"
      :contentTableConfig="contentTableConfig"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import type { TQueryInfo } from '@/store/main/system/types'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const handleTableDataUpdate = (queryInfo: TQueryInfo) => {
      pageContentRef.value?.fetchTableData(queryInfo)
    }
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
