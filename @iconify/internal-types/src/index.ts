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

import {
  IconifyJSON,
  IconifyInfo,
} from '@iconify/types'

export * from '@iconify/types'

/**
 * Collection info map
 */
export type IconifyMetaDataCollection = {
  [prefix: string]: IconifyInfo
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
