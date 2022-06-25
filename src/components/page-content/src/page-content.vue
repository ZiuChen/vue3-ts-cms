<template>
  <ZUTable
    :listData="dataList"
    :listTotalCount="dataTotalCount"
    v-bind="contentTableConfig"
    v-model:page="pageInfo"
  >
    <template #headerHandler>
      <el-button v-if="permissions.create" icon="CirclePlus" type="primary"
        >新建</el-button
      >
    </template>
    <template #status="scope">
      <el-tag :type="scope.row.status ? 'success' : 'danger'">{{
        scope.row.status ? '启用' : '停用'
      }}</el-tag>
    </template>
    <template #createAt="scope">
      <el-tag>{{ $filters.formatDate(scope.row.createAt) }}</el-tag>
    </template>
    <template #updateAt="scope">
      <el-tag>{{ $filters.formatDate(scope.row.updateAt) }}</el-tag>
    </template>
    <template
      v-for="item of privateSlots"
      :key="item.prop"
      #[item.slotName]="scope"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </template>
    <template #handler="scope">
      <el-button
        v-if="permissions.update"
        icon="Edit"
        size="small"
        type="primary"
        link
        >编辑</el-button
      >
      <el-button
        v-if="permissions.delete"
        @click="handleDeleteClick(scope.row)"
        icon="Delete"
        size="small"
        type="primary"
        link
        >删除</el-button
      >
    </template>
  </ZUTable>
</template>

<script lang="ts">
import ZUTable from '@/base-ui/table'
import { defineComponent, computed, PropType } from 'vue'
import { useStore } from 'vuex'
import { fetchModuleListData } from '@/hooks/fetchModuleListData'
import { usePermission } from '@/hooks/usePermission'
import type { IContentConfig } from '@/components/page-content/types'
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
      type: Object as PropType<IContentConfig>,
      required: true
    }
  },
  setup(props) {
    const permissions = {
      create: usePermission(props.pageName, 'create'),
      delete: usePermission(props.pageName, 'delete'),
      update: usePermission(props.pageName, 'update'),
      query: usePermission(props.pageName, 'query')
    }
    const { dataList, dataTotalCount, fetchTableData, pageInfo } =
      fetchModuleListData(props.moduleName, props.pageName)
    const privateSlots = computed(() =>
      props.contentTableConfig.propList.filter(
        (item: any) => item.isPrivate === true
      )
    )
    const store = useStore()
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    return {
      dataList,
      dataTotalCount,
      fetchTableData,
      pageInfo,
      privateSlots,
      permissions,
      handleDeleteClick
    }
  }
})
</script>

<style scoped></style>
