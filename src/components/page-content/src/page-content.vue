<template>
  <ZUTable :listData="dataList" v-bind="contentTableConfig">
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
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
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
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters['system/getListData'](props.pageName)
    )
    const dataCount = dataList.value.length
    return {
      dataList
    }
  }
})
</script>

<style scoped></style>
