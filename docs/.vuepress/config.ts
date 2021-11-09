/*
 * @Author: kongchaolaohei
 * @Date: 2021-08-18 09:43:05
 * @LastEditTime: 2021-11-09 16:53:59
 * @LastEditors: kongchaolaohei
 * @FilePath: /vuepress-note/docs/.vuepress/config.ts
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { themeConfig } from './base-config'

console.log(process.env.NODE_ENV, '<--->');


export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '空巢老黑',
  description: 'Just playing around',
  head: [
    ['link', {rel: 'icon', href: '/img/logo-icon.png'}]
  ],
  themeConfig: themeConfig
})