import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '空巢老黑',
  description: 'Just playing around',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '打好基础',
        children: [
          {
            text: 'CSS&HTML',
            link: '/CSS-HTML/base/guide.md'
          },
          {
            text: 'JavaScript',
            link: '/javascript/base/guide.md'
          },
          {
            text: '其他',
            link: '/other/base/guide.md'
          }
        ]
      },
      {
        text: '总是忘记',
        children: [
          {
            text: 'CSS&HTML',
            link: '/CSS-HTML/forget/guide.md'
          },
          {
            text: 'JavaScript',
            link: '/JavaScript/forget/guide.md'
          },
          {
            text: 'git',
            link: '/git/forget/guide.md'
          },
          {
            text: '其他',
            link: '/other/forget/guide.md'
          }
        ]
      },
      {
        text: '神奇操作',
        children: [
          {
            text: 'CSS&HTML',
            link: '/CSS-HTML/clever/guide.md'
          },
          {
            text: 'JavaScript',
            link: '/JavaScript/clever/guide.md'
          },
          // {
          //   text: '浏览器',
          //   link: '/CSS-HTML/clever/guide.md'
          // },
          {
            text: '其他',
            link: '/other/clever/guide.md'
          }
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
      '/CSS-HTML/base/': [
        {
          text: 'CSS&HTML基础',
          children: [
            '/CSS-HTML/base/guide.md'
          ]
        }
      ],
      '/javascript/base/': [
        {
          text: 'JavaScript基础',
          children: [
            '/javascript/base/guide.md'
          ]
        },
      ],
      '/other/base/': [
        {
          text: '其他基础',
          children: [
            '/other/base/guide.md'
          ]
        },
      ],
      // 总是忘记 模块路由
      '/CSS-HTML/forget/': [
        {
          text: 'CSS&HTML基础',
          children: [
            '/CSS-HTML/forget/guide.md'
          ]
        }
      ],
      '/javascript/forget/': [
        {
          text: 'JavaScript基础',
          children: [
            '/javascript/forget/guide.md'
          ]
        },
      ],
      '/other/forget/': [
        {
          text: '其他基础',
          children: [
            '/other/forget/guide.md'
          ]
        },
      ],
      // 神奇操作 模块路由
      '/CSS-HTML/clever/': [
        {
          text: 'CSS&HTML基础',
          children: [
            '/CSS-HTML/clever/guide.md'
          ]
        }
      ],
      '/javascript/clever/': [
        {
          text: 'JavaScript基础',
          children: [
            '/javascript/clever/guide.md'
          ]
        },
      ],
      '/other/clever/': [
        {
          text: '其他基础',
          children: [
            '/other/clever/guide.md'
          ]
        },
      ],
    }
  },
})