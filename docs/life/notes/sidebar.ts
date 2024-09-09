import { createPath, getFolderNames } from '../../utils/create-path'

// @ts-ignore
export default createPath(getFolderNames(__dirname, -2), [
  ['记录', '/'],
  ['2024年', [
    ['9月7日', '/2024/0907/']
  ]]
])