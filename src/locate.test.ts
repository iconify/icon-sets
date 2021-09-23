import { PathLike } from 'fs'
import { resolve, normalize } from 'pathe'

export const locateTest = (locate: (name: string) => PathLike) => {
  test('mdi resolves the json collection', () => {
    const received = locate('mdi') as string
    const expected = normalize(resolve('./json/mdi.json'))
    expect(received).toBe(expected)
  })
}
