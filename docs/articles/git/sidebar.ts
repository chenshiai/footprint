import { createPath, getFolderNames } from '../../utils/create-path'

// @ts-ignore
export default createPath(getFolderNames(__dirname, -2), [
  ['GIT', [
    ['开始', '/']
  ]],
  ['常见错误', [
    ['Couldn\'t connect to server', '/connect-fail/']
  ]]
])