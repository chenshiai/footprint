import { createPath } from '../../utils/create-path'
import { FolderName } from '..'

export default createPath(`/${FolderName}/notes`, [
  ['日常随记', '/'],
  ['2024年', [
    ['9月7日', '/2024/0907/']
  ]]
])