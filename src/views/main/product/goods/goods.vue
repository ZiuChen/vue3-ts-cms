<template>
  <div class="goods">
    <PageContent
      :contentTableConfig="contentTableConfig"
      :moduleName="'product'"
      :pageName="'good'"
    >
      <template #status="scope">
        <el-tag :type="scope.row.status ? 'success' : 'danger'">{{
          scope.row.status ? '启用' : '停用'
        }}</el-tag>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
