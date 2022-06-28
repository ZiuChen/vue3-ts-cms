<template>
  <el-card class="card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <el-check-tag
          v-if="showExpandBtn"
          :checked="isFold"
          @change="handleExpandClick"
        >
          <template #default>
            <el-icon>
              <ArrowDownBold v-show="!isFold" />
              <ArrowUpBold v-show="isFold" />
            </el-icon>
          </template>
        </el-check-tag>
      </div>
    </template>
    <transition name="el-fade-in-linear">
      <div class="card-content" v-show="!isFold">
        <slot></slot>
      </div>
    </transition>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    showExpandBtn: {
      type: Boolean,
      default: true
    },
    defaultFold: {
      type: Boolean,
      defaul: false
    }
  },
  setup(props) {
    const isFold = ref(props.defaultFold)
    const handleExpandClick = () => (isFold.value = !isFold.value)
    return {
      isFold,
      handleExpandClick
    }
  }
})
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  color: var(--el-text-color);
}
.card-content {
  padding: 20px;
}
</style>
