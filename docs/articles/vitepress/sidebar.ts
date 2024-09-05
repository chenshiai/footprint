import { createPath } from '../../utils/create-path'
import { FolderName } from '../articles-config'

export default createPath(`/${FolderName}/vitepress`, [
  ['VitePress', [
    ['使用心得', '/']
  ]],
  ['侧边栏', [
    ['多侧边栏配置方法', '/multiple-sidebars/']
  ], { collapsed: false }]
])
