const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/backend': {
        target: 'http://103.233.253.29/8080',
        changeOrigin: true
      }
    }
  }
})
