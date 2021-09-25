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
import { IconifyJSONPackageExports } from '@iconify/types'

export * from '@iconify/types'

/**
 * Get a collection.
 *
 * @param {string} name The name of the collection
 * @return {Promise<IconifyJSONPackageExports>}
 */
export async function lookupCollection(name: string): Promise<IconifyJSONPackageExports> {
  return await import(`@iconify-json/${name}`)
}
