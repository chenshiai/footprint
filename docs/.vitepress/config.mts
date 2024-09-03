import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChenShiAi Docs",
  description: "this is ChenShiAi's Docs",
  base: '/footprint/',
  head: [['link', { rel: 'icon', href: '/footprint/logo.ico' }]],

  themeConfig: {
    logo: '/logo.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ],
        collapsed: false
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present ChenShiAi'
    },

    // 编辑文章的链接
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    // 本地搜索
    search: {
      provider: 'local'
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

  // transformHead({ assets }) {
  //   // 相应地调整正则表达式以匹配字体
  //   const font1 = assets.find(file => /HYWenHei-85W\.\w+\.ttf/)
  //   const font2 = assets.find(file => /_-webfont\.\w+\.woff2/)
  //   if (font1) {
  //     return [
  //       [
  //         'link',
  //         {
  //           rel: 'preload',
  //           href: font1,
  //           as: 'font',
  //           type: 'font/ttf',
  //           crossorigin: ''
  //         },
  //       ],
  //     ]
  //   }
  // }
})
