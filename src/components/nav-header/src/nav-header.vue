<template>
  <div class="nav-header">
    <el-icon @click="handleCollapseClick">
      <expand v-if="isCollapse" />
      <fold v-else />
    </el-icon>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props, { emit }) {
    const isCollapse = ref(false)
    const handleCollapseClick = () => {
      isCollapse.value = !isCollapse.value
      emit('collapsechange', isCollapse.value)
    }
    return {
      isCollapse,
      handleCollapseClick
    }
  }
}
</script>

<style lang="less" scoped></style>
