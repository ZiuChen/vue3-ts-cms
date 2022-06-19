<template>
  <div class="zu-table">
    <el-table :data="listData" border>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { IPropList } from '../types'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as PropType<IPropList>,
      required: true
    }
  }
})
</script>

<style scoped>
.zu-table {
  padding: 20px;
}
</style>
