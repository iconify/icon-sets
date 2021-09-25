/**
 * This file is part of the iconify.design libraries.
 *
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * @license MIT
 *
 * For the full copyright and license information, please view the license.txt
 * file that is available in this file's directory.
 */
import { PathLike, promises as fs } from 'fs'
import { fileURLToPath } from 'url'
// todo@userquin: cleanup
import { dirname, join/*, resolve, normalize */ } from 'pathe'
import { IconifyInfo, IconifyJSON } from '@iconify/types'

export * from '@iconify/types'

/**
 * Collection info map
 */
export type IconifyMetaDataCollection = {
  [prefix: string]: IconifyInfo
}

const _dirname = typeof __filename !== 'undefined'
  ? dirname(__filename)
  : dirname(fileURLToPath(import.meta.url))

export const dir = join(_dirname, '/..')

// todo@userquin: cleanup
/*
console.log(`_dirname: ${_dirname}`)
if (typeof __dirname === 'undefined') {
  if (process.platform === 'win32') {
    console.log(`_dirname3: ${dirname(import.meta.url)}`)
    console.log(`_dirname3: ${join(dirname(import.meta.url), '/..')}`)
    console.log(`_dirname3: ${resolve(join(dirname(import.meta.url), '/..'))}`)
  }
  else {
    console.log(`_dirname2: ${dirname(fileURLToPath(import.meta.url))}`)
    console.log(`_dirname2: ${join(fileURLToPath(dirname(import.meta.url)), '/..')}`)
    console.log(`_dirname2: ${normalize(join(dirname(fileURLToPath(import.meta.url)), '/..'))}`)
  }
}
console.log(`Normalized _dirname: ${normalize(_dirname)}`)
console.log(`Resolve _dirname: ${resolve(_dirname, '..')}`)
console.log(`Normalized _dirname: ${dir}`)

*/
/**
 * Locate JSON file
 *
 * @param {string} name Collection name
 * @returns {string} Path to collection json file
 */
export function locate(name: string): PathLike {
  return join(dir, `./json/${name}.json`)
}

/**
 * Loads a collection.
 *
 * @param {PathLike} path The path to locate the `json` collection file.
 * @return {Promise<IconifyJSON>}
 */
export async function loadCollection(path: PathLike): Promise<IconifyJSON> {
  return JSON.parse(await fs.readFile(path, 'utf8'))
}

/**
 * Get a collection.
 *
 * @param {string} name The name of the collection
 * @return {Promise<IconifyJSON>}
 */
export async function lookupCollection(name: string): Promise<IconifyJSON> {
  return await loadCollection(locate(name))
}

/**
 * Get list of collections info.
 *
 * @return {Promise<IconifyMetaDataCollection>}
 */
export async function lookupCollections(): Promise<IconifyMetaDataCollection> {
  return JSON.parse(await fs.readFile(join(dir, './collections.json'), 'utf8'))
}
