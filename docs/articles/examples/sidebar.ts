import { createPath } from '../../utils/create-path'
import { FolderName } from '..'

export default createPath(`/${FolderName}/examples`, [
  ['API 示例', [
    ['api-examples', '/api-examples']
  ]],
  ['Markdown 示例', [
    ['Markdown-examples', '/markdown-examples']
  ]],
])
