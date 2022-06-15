<template>
  <div class="bread-crumb">
    <el-breadcrumb :separator="separator">
      <template v-for="b of breadcrumb" :key="b.name">
        <el-breadcrumb-item :to="{ path: b.path }" :replace="replace">{{
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
    breadcrumb: Array as PropType<TBreadcrumbs>,
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
