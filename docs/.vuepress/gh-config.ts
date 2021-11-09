/*
 * @Author: kongchaolaohei
 * @Date: 2021-10-06 12:59:20
 * @LastEditTime: 2021-11-09 17:00:42
 * @LastEditors: kongchaolaohei
 * @FilePath: /vuepress-note/docs/.vuepress/gh-config.ts
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { themeConfig } from './base-config'

console.log(process.env.NODE_ENV, '<--gh-->');


export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '空巢老黑',
  description: 'Just playing around',
  base: '/blogs/',
  head: [
    ['link', { rel: 'icon', href: '/blogs/img/logo-icon.png' }]
  ],
  themeConfig: themeConfig
})