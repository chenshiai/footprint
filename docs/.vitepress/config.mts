import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ChenShiAiの行迹',
  description: "this is ChenShiAi's Footprint",
  base: '/footprint/',
  head: [['link', { rel: 'icon', href: '/footprint/logo.ico' }]],

  themeConfig: {
    logo: '/logo.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '参考', link: 'https://vitepress.dev/zh/' },
    ],

    sidebar: {
      '/front-end': [
        {
          text: '前端开发',
          link: '/front-end',
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            {
              text: '你好，世界',
              link: '/front-end/javascript/js',
            },
          ],
        },
        {
          text: 'CSS',
          collapsed: false,
          items: [
            {
              text: '叠层样式表',
              link: '/front-end/css/css',
            },
          ],
        },
        {
          text: 'HTML',
          collapsed: false,
          items: [
            {
              text: 'html',
              link: '/front-end/html/html',
            },
          ],
        },
        {
          text: 'Web RTC',
          collapsed: false,
          items: [
            {
              text: 'api',
              link: '/front-end/webrtc/webRTC',
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/chenshiai' }],

    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: {
      text: '最后一次更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present ChenShiAi',
    },

    // 编辑文章的链接
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    // 本地搜索
    search: {
      provider: 'local',
    },

    // 右下角的广告
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },

    outline: {
      label: '本页目录',
      level: 'deep',
    },

    lightModeSwitchTitle: '切换到亮色模式',
    darkModeSwitchTitle: '切换到暗色模式',
    darkModeSwitchLabel: '明暗模式切换',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    externalLinkIcon: true,
  },
})
