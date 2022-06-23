<template>
  <ZUTable
    :listData="dataList"
    :listTotalCount="dataTotalCount"
    v-bind="contentTableConfig"
    v-model:page="pageInfo"
  >
    <template #headerHandler>
      <el-button type="primary">新建</el-button>
    </template>
    <template #status="scope">
      <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{
        scope.row.enable ? '启用' : '停用'
      }}</el-tag>
    </template>
    <template #createAt="scope">
      <el-tag>{{ $filters.formatDate(scope.row.createAt) }}</el-tag>
    </template>
    <template #updateAt="scope">
      <el-tag>{{ $filters.formatDate(scope.row.updateAt) }}</el-tag>
    </template>
    <template #handler>
      <el-button icon="Edit" size="small" type="primary" link>编辑</el-button>
      <el-button icon="Delete" size="small" type="primary" link>删除</el-button>
    </template>
  </ZUTable>
</template>

<script lang="ts">
import ZUTable from '@/base-ui/table'
import { defineComponent } from 'vue'
import { fetchModuleListData } from '@/hooks/fetchModuleListData'
export default defineComponent({
  components: {
    ZUTable
  },
  props: {
    moduleName: {
      type: String,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { dataList, dataTotalCount, fetchTableData, pageInfo } =
      fetchModuleListData(props.moduleName, props.pageName)
    return {
      dataList,
      dataTotalCount,
      fetchTableData,
      pageInfo
    }
  }
})
</script>

<style scoped></style>
