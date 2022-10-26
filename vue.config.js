const { defineConfig } = require('@vue/cli-service')
const registerRouter = require('./backend/router')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  //关闭lint校验
  devServer: {
    onBeforeSetupMiddleware(devServer) {
      registerRouter(devServer.app)
    }
  },
  
})
