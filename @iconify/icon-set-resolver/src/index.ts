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
import { IconifyInfo, IconifyJSON, IconifyMetaData, IconifyChars } from '@iconify/internal-types'

export * from '@iconify/internal-types'

export type IconSetInfo = {
  info: IconifyInfo
  icons: IconifyJSON
  metadata: IconifyMetaData
  chars: IconifyChars
}

/**
 * Get a collection.
 *
 * @param {string} name The name of the collection
 * @return {Promise<IconSetInfo>}
 */
export async function lookupCollection(name: string): Promise<IconSetInfo> {
  return await import(`@iconify-json/${name}`)
}
