const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://vue-tasktracker-backend.herokuapp.com/',
        changeOrigin: true,
        loglevel: 'debug',
        pathRewrite: { '^/api': '/' }
      }
    }
  },
})
