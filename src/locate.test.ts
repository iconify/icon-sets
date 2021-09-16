import { resolve } from 'path'
import { locate } from '../dist'

const cwd = process.cwd()

describe('locate', () => {
  test('mdi resolves the json collection', () => {
    const received = locate('mdi') as string
    const expected = resolve(cwd, 'json/', 'mdi.json').replace(/\\/g, '/')
    expect(received).toBe(expected)
  })
})
