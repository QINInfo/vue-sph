const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      // 自定义代理名,请求时使用
      '/api': {
        // /dy 要映射到 target 域名
        // 要跨域到的网址
        target: 'http://gmall-h5-api.atguigu.cn',
        changeOrigin: true, //关键点: 代表需要跨域
        // pathRewrite: {
        // 	// ^ : 正则的字符串开头
        // 	'^/api': '',
        // },
      },
    },
  },
})
