import { createPath, getFolderNames } from '../../utils/create-path'

// @ts-ignore
export default createPath(getFolderNames(__dirname, -2), [
  ['API 示例', [
    ['api-examples', '/api-examples']
  ]],
  ['Markdown 示例', [
    ['Markdown-examples', '/markdown-examples']
  ]],
])
