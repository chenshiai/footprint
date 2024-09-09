import { createPath, getFolderNames } from '../../utils/create-path'

// @ts-ignore
export default createPath(getFolderNames(__dirname, -2), [
  ['VitePress', [
    ['使用心得', '/']
  ]],
  ['侧边栏', [
    ['多侧边栏配置方法', '/multiple-sidebars/']
  ], { collapsed: false }]
])
