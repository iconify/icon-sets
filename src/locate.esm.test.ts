import { resolve } from 'path'
import { locate } from '.'

const cwd = process.cwd()

test('mdi resolves the json collection', () => {
  const received = locate('mdi') as string
  const expected = resolve(cwd, 'json', 'mdi.json').replace(/\\/g, '/')
  expect(received).toBe(expected)
})
