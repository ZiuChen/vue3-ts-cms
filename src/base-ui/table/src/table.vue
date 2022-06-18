<template>
  <div class="zu-table">
    <el-table :data="listData">
      <template v-for="item of propList" :key="item.prop">
        <el-table-column v-bind="item">
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

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
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
