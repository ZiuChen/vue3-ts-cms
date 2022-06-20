<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <ZUTable
      :title="'数据列表'"
      :listData="userList"
      :propList="propList"
      :showIndexColumn="showIndexColumn"
      :showSelectColumn="showSelectColumn"
      @selectChange="handleSelectChange"
    >
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
        <el-button icon="Edit" size="mini" type="text">编辑</el-button>
        <el-button icon="Delete" size="mini" type="text">删除</el-button>
      </template>
    </ZUTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import ZUTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    ZUTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '50', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '100',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '100',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '100',
        slotName: 'handler'
      }
    ]
    const showIndexColumn = true
    const showSelectColumn = true
    const handleSelectChange = (tableData: any) => {
      console.log(tableData)
    }
    return {
      searchFormConfig,
      userList,
      userCount,
      propList,
      showIndexColumn,
      showSelectColumn,
      handleSelectChange
    }
  }
})
</script>

<style scoped></style>
