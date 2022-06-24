<template>
  <div class="zu-table">
    <div class="header">
      <slot name="header">
        <div class="title">
          <h2>{{ title }}</h2>
        </div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border @selection-change="handleSelectChange">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="50"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="item of propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[25, 50, 100]"
          small
          layout="total, sizes, prev, pager, next, jumper"
          :total="listTotalCount"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TPropList, IPageInfo } from '../types'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    },
    listTotalCount: {
      type: Number,
      required: true
    },
    propList: {
      type: Array as PropType<TPropList>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object as PropType<IPageInfo>,
      default: () => ({
        currentPage: 1,
        pageSize: 25
      })
    }
  },
  emits: ['selectChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectChange = (tableData: any) => {
      emit('selectChange', tableData)
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      handleSelectChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped>
.zu-table {
  padding: 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
}
</style>
