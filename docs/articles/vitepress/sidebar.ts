import { createPath } from '../../utils/create-path'

// @ts-ignore
export default createPath('/articles/vitepress', [
  ['VitePress', [
    ['使用心得', '/']
  ]],
  ['侧边栏', [
    ['多侧边栏配置方法', '/multiple-sidebars/']
  ], { collapsed: false }]
])
