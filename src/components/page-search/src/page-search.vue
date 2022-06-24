<template>
  <ZUForm v-model="formData" v-bind="searchFormConfig">
    <template #header>
      <h2>高级检索</h2>
    </template>
    <template #footer>
      <div class="btn-group">
        <el-button @click="restore">重置</el-button>
        <el-button @click="search" type="primary">搜索</el-button>
      </div>
    </template>
  </ZUForm>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import ZUForm from '@/base-ui/form'
import { ISearchFormConfig } from '@/components/page-search/types'
import type { IFormData } from '../types'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object as PropType<ISearchFormConfig>,
      reuqired: true
    }
  },
  components: {
    ZUForm
  },
  emits: ['tableDataUpdate'],
  setup(props, { emit }) {
    // TODO: 用reactive替换ref会导致: 数据变了但是template未变
    const formData = ref<IFormData>({})
    const formItems = ref(props.searchFormConfig?.formItems ?? [])
    const mapFormItems = (formData: IFormData) => {
      for (const { field } of formItems.value) {
        formData[field] = ''
      }
    }
    const restore = () => {
      mapFormItems(formData.value)
      emit('tableDataUpdate')
    }
    const search = () => {
      emit('tableDataUpdate', formData.value)
    }
    mapFormItems(formData.value)
    return {
      formData,
      restore,
      search
    }
  }
})
</script>

<style lang="less" scoped>
.btn-group {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
