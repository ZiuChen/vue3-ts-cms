<template>
  <ZUTable
    :listData="dataList"
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
import { defineComponent, ref, computed, watch } from 'vue'
import { useStore } from '@/store'
import type { TQueryInfo } from '@/store/main/system/types'
export default defineComponent({
  components: {
    ZUTable
  },
  props: {
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
    const store = useStore()
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 25
    })
    watch(pageInfo, () => fetchTableData())
    const fetchTableData = (queryInfo: TQueryInfo = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    fetchTableData()
    const dataList = computed(() =>
      store.getters['system/getListData'](props.pageName)
    )
    // const dataCount = dataList.value.length
    return {
      dataList,
      fetchTableData,
      pageInfo
    }
  }
})
</script>

<style scoped></style>
