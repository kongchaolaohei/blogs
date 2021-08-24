import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '空巢老黑',
  description: 'Just playing around',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    navbar: [
      {
        text: '常用知识',
        children: [
          {
            text: 'CSS&HTML',
            link: '/CSS-HTML/commonly/guide.md'
          },
          {
            text: 'JavaScript',
            link: '/javascript/commonly/guide.md'
          },
          {
            text: 'git',
            link: '/git/commonly/guide.md'
          },
          {
            text: '其他',
            link: '/other/commonly/guide.md'
          }
        ]
      },
      {
        text: '解决方案',
        children: [
          {
            text: 'CSS&HTML',
            link: '/CSS-HTML/solution/多边形制作.md'
          },
          // {
          //   text: 'JavaScript',
          //   link: '/JavaScript/solution/guide.md'
          // },
          // {
          //   text: '浏览器',
          //   link: '/CSS-HTML/solution/guide.md'
          // },
          // {
          //   text: '其他',
          //   link: '/other/solution/guide.md'
          // }
        ]
      },
      {
        text: '更多',
        children: [
          {
            text: '常用网站',
            link: '/'
          }
        ]
      }
    ],
    sidebar: {
      // 基础模块路由
      '/CSS-HTML/commonly/': [
        {
          text: 'CSS&HTML基础',
          children: [
            '/CSS-HTML/commonly/guide.md'
          ]
        }
      ],
      '/javascript/commonly/': [
        {
          text: 'JavaScript基础',
          children: [
            '/javascript/commonly/guide.md'
          ]
        },
      ],
      '/other/commonly/': [
        {
          text: '其他基础',
          children: [
            '/other/commonly/guide.md'
          ]
        },
      ],
      // 神奇操作 模块路由
      '/CSS-HTML/solution/': [
        {
          text: 'CSS&HTML的神奇操作',
          children: [
            '/CSS-HTML/solution/多边形制作.md'
          ]
        }
      ],
      '/javascript/solution/': [
        {
          text: 'JavaScript基础',
          children: [
            '/javascript/solution/guide.md'
          ]
        },
      ],
      '/other/solution/': [
        {
          text: '其他基础',
          children: [
            '/other/solution/guide.md'
          ]
        },
      ],
    }
  },
})