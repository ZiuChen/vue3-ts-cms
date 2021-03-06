// 如果我们不满足Vue CLI为我们提供的webpack配置，可以进行自定义
const path = require('path')
module.exports = {
  // // 配置方式1: Vue CLI 提供的属性
  // outputDir: './build',
  // publicPath: './', // 打包后使用相对路径读取资源
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://mock.apifox.cn/m1/1122477-0-default',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // // 配置方式2: 与webpack的属性完全一致，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/component'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 配置方式3: 链式编程
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
