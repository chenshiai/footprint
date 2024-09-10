import { createPath } from '../utils/create-path'

// @ts-ignore
export default createPath('/example', [
  ['example 根目录', [
    ['example', '/example1']
  ]],
  ['level1', [
    ['example2', '/level1/example2'],
    ['level2', [
      ['example3', '/level1/level2/example3'],
      ['level3', [
        ['example4', '/level1/level2/level3/example4']
      ]]
    ]]
  ]]
])
