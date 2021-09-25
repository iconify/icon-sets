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
import { dirname, join } from 'pathe'

/**
 * Icon dimensions.
 *
 * Used in:
 *  icon (as is)
 *  alias (overwrite icon's properties)
 *  root of JSON file (default values)
 */
export interface IconifyDimensions {
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
 * Icon transformations.
 *
 * Used in:
 *  icon (as is)
 *  alias (merged with icon's properties)
 *  root of JSON file (default values)
 */
export interface IconifyTransformations {
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
}

/**
 * Icon alignment.
 */
export interface IconifyAlignment {
  /**
   * Icon horizontal alignment.
   *
   * @default 'center'
   */
  horizontal: 'center' | 'left' | 'right'
  /**
   * Icon vertical alignment.
   *
   * @default 'middle'
   */
  vertical: 'middle' | 'top' | 'bottom'
  /**
   * Slice?
   *
   * @default false
   */
  slice: boolean
}

/**
 * Combination of dimensions and transformations.
 */
export interface IconifyOptional extends IconifyDimensions, IconifyTransformations {
}

/**
 * Alias.
 */
export interface IconifyAlias extends IconifyOptional {
  /**
   * Parent icon index without prefix, required.
   */
  parent: string

  // IconifyOptional properties.
  // Alias should have only properties that it overrides.
  // Transformations are merged, not overridden. See IconifyTransformations comments.
}

/**
 * Icon.
 */
export interface IconifyIcon extends IconifyOptional {
  /**
   * Icon body: <path d="..." />, required.
   */
  body: string

  // IconifyOptional properties.
  // If property is missing in JSON file, look in root object for default value.
}

/**
 * Icon with optional parameters that are provided by API and affect only search
 */
interface APIIconAttributes {
  /**
   * True if icon is hidden.
   *
   * Used in icon sets to keep icons that no longer exist, but should still be accessible
   * from API, preventing websites from breaking when icon is removed by developer.
   *
   * @default false
   */
  hidden?: boolean
}

export interface ExtendedIconifyIcon extends IconifyIcon, APIIconAttributes {}
export interface ExtendedIconifyAlias extends IconifyAlias, APIIconAttributes {}

/**
 * "icons" field of JSON file.
 */
export interface IconifyIcons {
  /**
   * Index is name of icon, without prefix. Value is ExtendedIconifyIcon object.
   */
  [index: string]: ExtendedIconifyIcon
}

/**
 * "aliases" field of JSON file.
 */
export interface IconifyAliases {
  /**
   * Index is name of icon, without prefix. Value is ExtendedIconifyAlias object.
   */
  [index: string]: ExtendedIconifyAlias
}

/**
 * Iconify collection info.
 */
export interface IconifyInfo {
  /**
   * Icon set name.
   */
  name: string
  /**
   * Total number of icons.
   */
  total?: number
  /**
   * Version string.
   */
  version?: string
  /**
   * Author information.
   */
  author: string | {
    /**
     *  Author name.
     */
    name: string
    /**
     * Link to author's website or icon set website.
     */
    url?: string
  }
  /**
   * Link to author's website or icon set website.
   */
  url?: string
  /**
   * License.
   */
  license: string | {
    /**
     * Human readable license.
     */
    title: string
    /**
     * SPDX license identifier.
     */
    spdx?: string
    /**
     * License URL.
     */
    url?: string
  }
  /**
   * License URL.
   */
  licenseURL?: string
  /**
   * Array of icons that should be used for samples in icon sets list.
   */
  samples: string[]
  /**
   * Icon grid: number or array of numbers.
   */
  height?: number | number[]
  /**
   * Display height for samples: 16 - 24.
   *
   * @default 16
   */
  displayHeight?: number
  /**
   *  Category on Iconify collections list.
   */
  category?: string
  /**
   * Palette status.
   *
   * True if icons have predefined color scheme, false if icons use currentColor.
   * Icon set should not mix icons with and without palette to simplify search.
   */
  palette: string | boolean
}

/**
 * Optional themes, old format.
 *
 * Deprecated because format is unnecessary complicated. Key is meaningless, suffixes and prefixes are mixed together.
 */
export interface LegacyIconifyThemes {
  /**
   * Key is unique string.
   */
  [index: string]: {
    /**
     * Theme title.
     */
    title: string
    /**
     * Icon prefix or suffix, including dash.
     *
     * All icons that start with prefix and end with suffix belong to theme.
     *
     * Example: 'baseline-'
     */
    prefix?: string
    /**
     * Icon suffix or suffix, including dash.
     *
     * All icons that start with prefix and end with suffix belong to theme.
     *
     * Example: '-filled'
     */
    suffix?: string
  }
}

/**
 * Characters used in font.
 */
export interface IconifyChars {
  /**
   * Index is character, such as "f000".
   *
   * Value is icon name.
   */
  [index: string]: string
}

/**
 * Icon categories
 */
export interface IconifyCategories {
  /**
   * Index is category title, such as "Weather".
   *
   * Value is array of icons that belong to that category.
   * Each icon can belong to multiple categories or no categories.
   */
  [index: string]: string[]
}

/**
 * Meta data stored in JSON file, used for browsing icon set.
 */
export interface IconifyMetaData {
  /**
   * Icon set information block.
   *
   * Used for public icon sets, can be skipped for private icon sets.
   */
  info?: IconifyInfo
  /**
   * Characters used in font.
   *
   * Used for searching by character for icon sets imported from font, exporting icon set to font.
   */
  chars?: IconifyChars
  /**
   * Categories.
   *
   * Used for filtering icons.
   */
  categories?: IconifyCategories
  /**
   * Optional themes (old format).
   */
  themes?: LegacyIconifyThemes
  /**
   * Optional themes prefixes (new format).
   *
   * Key is prefix, value is title.
   */
  prefixes?: Record<string, string>
  /**
   * Optional themes suffixes (new format).
   *
   * Key is suffix, value is title.
   */
  suffixes?: Record<string, string>
}

/**
 * JSON structure.
 *
 * All optional values can exist in root of JSON file, used as defaults.
 */
export interface IconifyJSON extends IconifyOptional, IconifyMetaData {
  /**
   * Prefix for icons in JSON file, required.
   */
  prefix: string
  /**
   * API provider, optional.
   */
  provider?: string
  /**
   * List of icons, required.
   */
  icons: IconifyIcons
  /**
   * Optional aliases.
   */
  aliases?: IconifyAliases
  /**
   * Optional list of missing icons.
   *
   * Returned by Iconify API when querying for icons that do not exist.
   */
  not_found?: string[]
  // IconifyOptional properties that are used as default values for icons when icon is missing value.
  // If property exists in both icon and root, use value from icon.
  // This is used to reduce duplication.
}

/**
 * Collection info map
 */
export type IconifyMetaDataCollection = {
  [prefix: string]: IconifyMetaData
}

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

const dir = join(_dirname, '/..')

// todo@userquin: cleanup
// console.log(`_dirname: ${_dirname}`)
// if (typeof __dirname === 'undefined') {
//   if (false/* process.platform === 'win32' */) {
//     console.log(`_dirname3: ${dirname(import.meta.url)}`)
//     console.log(`_dirname3: ${join(dirname(import.meta.url), '/..')}`)
//     console.log(`_dirname3: ${resolve(join(dirname(import.meta.url), '/..'))}`)
//   }
//   else {
//     console.log(`_dirname2: ${dirname(fileURLToPath(import.meta.url))}`)
//     console.log(`_dirname2: ${join(fileURLToPath(dirname(import.meta.url)), '/..')}`)
//     console.log(`_dirname2: ${normalize(join(dirname(fileURLToPath(import.meta.url)), '/..'))}`)
//   }
// }
// console.log(`Normalized _dirname: ${normalize(_dirname)}`)
// console.log(`Resolve _dirname: ${resolve(_dirname, '..')}`)
// console.log(`Normalized _dirname: ${dir}`)

/**
 * Locate JSON file
 *
 * @param {string} name Collection name
 * @returns {string} Path to collection json file
 */
export const locate = (name: string): PathLike => join(dir, `./json/${name}.json`)

/**
 * Loads a collection.
 *
 * @param {PathLike} path The path to locate the `json` collection file.
 * @return {Promise<IconifyJSON>}
 */
export const loadCollection = async(path: PathLike): Promise<IconifyJSON> => {
  return JSON.parse(await fs.readFile(path, 'utf8'))
}

/**
 * Get a collection.
 *
 * @param {string} name The name of the collection
 * @return {Promise<IconifyJSON>}
 */
export const lookupCollection = async(name: string): Promise<IconifyJSON> => {
  return await loadCollection(locate(name))
}

/**
 * Get list of collections info.
 *
 * @return {Promise<IconifyMetaDataCollection>}
 */
export const lookupCollections = async(): Promise<IconifyMetaDataCollection> => {
  return JSON.parse(await fs.readFile(join(dir, './collections.json'), 'utf8'))
}
