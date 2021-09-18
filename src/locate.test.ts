import { resolve } from 'path'
import { PathLike } from 'fs'

const cwd = process.cwd()

export const locateTest = (locate: (name: string) => PathLike) => {
  test('mdi resolves the json collection', () => {
    const received = locate('mdi') as string
    const expected = resolve(cwd, 'json', 'mdi.json').replace(/\\/g, '/')
    expect(received).toBe(expected)
  })
}
