import { createPath } from '../../utils/create-path'
import { FolderName } from '../articles-config'

export default createPath(`/${FolderName}/vitepress`, [
  ['VitePress', [
    ['开始', '/']
  ]],
  ['侧边栏', [
    ['多侧边栏配置方法', '/multiple-sidebars']
  ], { collapsed: false }]
])
