import { validateCIN } from './validate'
import type { ParseResult } from './types'

/**
 * parse cin
 * @param code - code to parse
 * @returns parsed result `ParseResult`
 *
 * @example
 * ```
 * import { parseCIN } from '@code-ts/cin'
 * parseCIN('110101199003076878') // { isValid: true }
 * ```
 */
export function parseCIN(code: string): ParseResult {
  const isValid = validateCIN(code)

  if (!isValid) {
    return {
      isValid,
    }
  }

  return {
    isValid,
  }
}
