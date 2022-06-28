<template>
  <div class="overview">
    <ZUCard title="关于" :showExpandBtn="false">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </ZUCard>
    <ZUCard title="技术栈" :defaultFold="false">
      <ZUTextLink :text-arrs="technologyStacks"></ZUTextLink>
      <ZUDescriptions
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      />
      <ZUDescriptions
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      />
    </ZUCard>
    <ZUCard title="项目规范" :defaultFold="true">
      <ZUDescriptions
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          {
            name: '文件(.ts .vue .json .d.ts)',
            description: '统一小写, 多个单词使用-分割'
          }
        ]"
      />
      <ZUDescriptions
        title="编写组件规范"
        :column="1"
        :table-datas="componentSpecification"
      />
    </ZUCard>
    <ZUCard title="项目结构" :defaultFold="true">
      <div class="c-left">
        <ZUCode language="bash" :code="projectDir" />
      </div>
    </ZUCard>
    <ZUCard title="版本控制" :defaultFold="true">
      <ZUDescriptions :column="1" :table-datas="gitOperations" />
    </ZUCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ZUDescriptions from '@/base-ui/descriptions'
import ZUTextLink from '@/base-ui/text-link'
import ZUCode from '@/base-ui/code'
import ZUCard from '@/base-ui/card'
import {
  componentSpecification,
  technologyStacks,
  dependencies,
  devDependencies,
  gitOperations,
  projectDir
} from './config'
export default defineComponent({
  components: {
    ZUDescriptions,
    ZUCard,
    ZUTextLink,
    ZUCode
  },
  setup() {
    return {
      componentSpecification,
      technologyStacks,
      dependencies,
      devDependencies,
      gitOperations,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }
  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }
  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
