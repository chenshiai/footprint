import { createPath } from '../../utils/create-path'
import { FolderName } from '../articles-config'

export default createPath(`/${FolderName}/front-end`, [
  ['前端开发', [
    ['攻城狮', '/']
  ]],
  ['JavaScript', [
    ['你好，世界', '/javascript/js']
  ], { collapsed: false }],
  ['CSS', [
    ['叠层样式表', '/css/css']
  ], { collapsed: true }],
  ['HTML', [
    ['超文本标记语言', '/html/html']
  ], { collapsed: true }],
  ['浏览器', [
    ['跨域相关', '/browser/cross-domain']
  ], { collapsed: true }]
])
