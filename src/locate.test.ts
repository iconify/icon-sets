import { PathLike } from 'fs'
import { resolve } from 'pathe'

export const locateTest = (locate: (name: string) => PathLike) => {
  test('mdi resolves the json collection', () => {
    const received = locate('mdi') as string
    const expected = resolve('./json/mdi.json').replace(/\\/g, '/')
    expect(received).toBe(expected)
  })
}
