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
        width="80"
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
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { IPropList } from '../types'

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
    propList: {
      type: Array as PropType<IPropList>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectChange'],
  setup(props, { emit }) {
    const handleSelectChange = (tableData: any) => {
      emit('selectChange', tableData)
    }
    return {
      handleSelectChange
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
