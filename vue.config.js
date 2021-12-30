/*
 * @Author: kongchaolaohei
 * @Date: 2021-12-28 16:19:13
 * @LastEditTime: 2021-12-28 16:46:59
 * @LastEditors: kongchaolaohei
 * @FilePath: /vuepress-note/vue.config.js
 */
const path = require('path')

// 配置基本大小
const TerserJSPlugin = require('terser-webpack-plugin')
module.exports = {
  // publicPath: process.NODE_ENV === 'development' ? '/' : '/monitor',
  publicPath: process.NODE_ENV === 'development' ? '/' : '/',
  lintOnSave: true,

  devServer: {
    // upm登录接口跨域
    proxy: {
      '/proxy-upm/*': {
        // target: 'http://192.168.3.179:9528', 
        target: 'http://192.168.31.84:8001', // /apiTest
        // target: 'http://192.168.3.179:18090', // /
        // target: 'http://192.168.31.184:18090', // /
        // target: 'http://192.168.31.46:18090/', // /
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          // '^/proxy-upm/': '/api/',
          // '^/proxy-upm/': '/apiTest',
          // '^/proxy-upm/': '/apiTest/',
          '^/proxy-upm/': '/',
        }
      }
    }
  },
}