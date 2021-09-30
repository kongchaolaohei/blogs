import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '空巢老黑',
  description: 'Just playing around',
  head: [
    ['link', {rel: 'icon', href: '/img/logo-icon.png'}]
  ],
  themeConfig: {
    logo: '/img/logo-icon.png',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    navbar: [
      {
        text: '解决方案',
        link: '/solution/CSS-HTML/多边形绘制.md'
        // children: [
        //   {
        //     text: 'CSS&HTML',
        //     link: '/solution/CSS-HTML/多边形绘制.md'
        //   }
        // ]
      },
      {
        text: '常用知识',
        link: '/commonly/CSS-HTML/commonly.md'
        // children: [
        //   {
        //     text: 'CSS&HTML',
        //     link: '/commonly/CSS-HTML/commonly.md'
        //   },
        //   {
        //     text: 'JavaScript',
        //     link: '/commonly/javascript/commonly.md'
        //   },
        //   {
        //     text: 'git',
        //     link: '/commonly/git/commonly.md'
        //   }
        // ]
      },
      {
        text: '更多',
        link: '/more/usedWeb.md'
        // children: [
        //   {
        //     text: '常用网站&工具',
        //     link: '/more/usedWeb.md'
        //   }
        // ]
      }
    ],
    sidebar: {
      /* -----------------------常用知识 模块路由----------------------- */
      '/commonly/': [
        {
          text: 'CSS&HTML常用操作',
          children: [
            '/commonly/CSS-HTML/commonly.md',
            '/commonly/CSS-HTML/clip-path/clip-path.md',
            '/commonly/CSS-HTML/transform/transform.md'
          ]
        },
        {
          text: 'JavaScript常用操作',
          children: [
            '/commonly/javascript/commonly.md'
          ]
        },
        {
          text: 'git常用操作',
          children: [
            '/commonly/git/commonly.md'
          ]
        },
        {
          text: 'Linux',
          children: [
            '/commonly/linux/Linux基础知识.md',
          ]
        }
      ],
      /* -----------------------解决方案 模块路由----------------------- */
      '/solution/': [
        {
          text: 'CSS&HTML解决方案',
          children: [
            '/solution/CSS-HTML/多边形绘制.md'
          ]
        },
        {
          text: 'Vue相关解决方案',
          children: [
            '/solution/vue/vue权限解决方案.md'
          ]
        },
        {
          text: '其他解决方案',
          children: [
            '/solution/other/echart图例触发不灵敏.md',
            '/solution/other/简单的websocket工具.md',
            '/solution/other/不同页面通讯问题.md',
          ]
        },
        // {
        //   text: 'JavaScript解决方案',
        //   children: [
        //     '/solution/javascript/solution.md'
        //   ]
        // }
      ],
      /* -----------------------其他 模块路由----------------------- */
      '/more/': [
        '/more/commonly.md',
        '/more/usedWeb.md',
      ]
    }
  },
})