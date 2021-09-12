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
import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'upath'

const _dirname = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))

const dir = resolve(_dirname, '..')

export type CollectionInfo = {
  name: string
  total: number
  author: string
  url: string
  license: string
  licenseURL: string
  height?: number
  displayHeight?: number
  samples: string[]
  palette: string
  category: string
}

/**
 * Icon data.
 */
export type IconifyIcon = Record<string, {
  /**
   * icon body
   */
  body: string
  /**
   * width in pixels
   */
  width: number
  /**
   * height in pixels
   */
  height: number
  /**
   * rotation, values: 0 = 0deg, 1 = 90deg, 2 = 180deg, 3 = 270deg
   *
   * @default 0
   */
  rotate?: 0 | 1 | 2 | 3
  /**
   * horizontal flip
   *
   * @default false
   */
  hFlip?: boolean
  /**
   * vertical flip
   *
   * @default false
   */
  vFlip?: boolean
  /**
   * If set to true, icon is hidden. That means icon was removed from collection for some reason, but it is kept in JSON file to prevent applications that rely on old icon from breaking
   *
   * @default false
   */
  hidden?: boolean
}>

/**
 * Alias for icons.
 */
export type Alias = Record<string, Record<string, IconifyIcon>>

/**
 * Collection of icons.
 */
export type Collection = {
  /**
   * Prefix for icons in JSON file. All icons in an icon set have the same prefix and icon set cannot include icons from other icon sets.
   */
  prefix: string
  /**
   * Collection info.
   */
  info?: CollectionInfo
  /**
   * List of icons. Key is icon name, value is `IconifyIcon` icon data.
   */
  aliases?: Alias[]
  /**
   * Left position of viewBox.
   *
   * @default 0
   */
  left?: number
  /**
   * Top position of viewBox.
   *
   * @default 0
   */
  top?: number
  /**
   * Width of viewBox.
   *
   * @default 16
   */
  width?: number
  /**
   * height of viewBox.
   *
   * @default 16
   */
  height?: number
}

/**
 * Get root directory of this package
 * (not really useful in Node.js because require can do it, but added anyway to match php code)
 *
 * @returns {string}
 */
export const rootDir = () => dir

/**
 * Locate JSON file
 *
 * @param {string} name Collection name
 * @returns {string} Path to collection json file
 */
export const locate = (name: string) => `${dir}/json/${name}.json`

/**
 * Get a collection.
 *
 * @return {Collection|null}
 */
export const collection = async(name: string): Promise<Collection> => {
  return JSON.parse(await fs.readFile(locate(name), 'utf8'))
}

/**
 * Get list of collections info.
 *
 * @return {CollectionInfo|null}
 */
export const collections = async(): Promise<CollectionInfo[]> => {
  return JSON.parse(await fs.readFile(`${dir}/collections.json`, 'utf8'))
}
