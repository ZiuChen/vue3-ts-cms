<template>
  <div class="bread-crumb">
    <el-breadcrumb :separator="separator">
      <template v-for="b of breadcrumb" :key="b.name">
        <el-breadcrumb-item v-bind="{ ...b }" :replace="replace">{{
          b.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { TBreadcrumbs } from '../types'

export default defineComponent({
  props: {
    breadcrumb: {
      type: Array as PropType<TBreadcrumbs>,
      default: () => [],
      required: true
    },
    separator: {
      type: String,
      default: '/',
      required: false
    },
    replace: {
      type: Boolean,
      default: false,
      required: false
    }
  }
})
</script>

<style scoped></style>
