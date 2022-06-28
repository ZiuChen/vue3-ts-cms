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
          <el-button type="primary" @click="handleConfirmClick"
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
import { useStore } from 'vuex'
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
    },
    pageName: {
      type: String,
      required: true
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

    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/updatePageDataAction', {
          pageName: props.pageName,
          updateData: { ...formData.value },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          createData: { ...formData.value }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style lang="less" scoped></style>
