import { createPath } from '../../utils/create-path'
import { FolderName } from '..'

export default createPath(`/${FolderName}/git`, [
  ['GIT', [
    ['开始', '/']
  ]],
  ['常见错误', [
    ['Couldn\'t connect to server', '/connect-fail/']
  ]]
])