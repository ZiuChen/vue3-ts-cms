<template>
  <div class="user-options">
    <el-button :icon="'search'" circle />
    <el-button :icon="'bell'" circle />
    <el-button :icon="isDark ? 'moon' : 'sunny'" @click="toggleDark()" circle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
export default defineComponent({
  setup() {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    return {
      isDark,
      toggleDark
    }
  }
})
</script>

<style lang="less" scoped>
.user-options {
  padding: 20px;
}
</style>
