/*
 * @Author: kongchaolaohei
 * @Date: 2021-08-18 09:43:05
 * @LastEditTime: 2022-03-29 15:33:19
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
  themeConfig: themeConfig,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
        // hotKeys: ["Control","k"]
        // 允许搜索 Frontmatter 中的 `tags`
        getExtraFields: (page) => page.frontmatter.tags ?? [],
      },
    ]
    // ],
    // [
    //   '@vuepress/plugin-docsearch', {
    //   }
    // ]
  ],
})
