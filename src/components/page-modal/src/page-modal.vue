<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="modalConfig.pageName"
      width="30%"
      center
      append-to-body
      destroy-on-close
    >
      <ZUForm v-bind="modalConfig" v-model="formData"></ZUForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import ZUForm from '@/base-ui/form'
import type { IModalConfig } from '@/components/page-modal/types'
export default defineComponent({
  components: {
    ZUForm
  },
  props: {
    modalConfig: {
      type: Object as PropType<IModalConfig>,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    // @handleModalChange => defaultInfo => formData <=> modelValue(via emit)
    const dialogVisible = ref(false)
    const formData = ref<{ [key: string]: any }>({})
    watch(
      () => props.defaultInfo,
      (newVal) => (formData.value = { ...newVal })
    )
    watch(
      () => props.modalConfig,
      (newVal) => {
        console.log('modalConfig change')
        console.log(newVal)
      },
      {
        deep: true
      }
    )
    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style lang="less" scoped></style>
