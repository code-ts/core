import { CIN_PATTERN } from './constants'

/**
 * 公民身份证号码长度
 */
const CIN_LENGTH = 18

/**
 * 公民身份证号码 取模值
 */
const CIN_MOD = 11

/**
 * 公民身份证号码字符集
 */
const CIN_PARITY = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

/**
 * 公民身份证号码加权因子
 */
const CIN_FACTORS = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]

/**
 * 校验公民身份证号码
 * @param code - 公民身份证号码
 * @returns 是否有效
 *
 * @example
 * ```
 * import { validateCIN } from '@code-ts/cin'
 * validateCIN('110101199003076878')  // true
 * ```
 */
export function validateCIN(code: string) {
  if (code.length !== CIN_LENGTH) {
    return false
  }
  if (!CIN_PATTERN.test(code)) {
    return false
  }

  const sum = code
    .split('')
    .filter((_, idx) => idx < 17)
    .reduce(
      (acc, char, idx) => acc + Number.parseInt(char, 10) * CIN_FACTORS[idx],
      0,
    )

  return CIN_PARITY[sum % CIN_MOD] === code.charAt(17).toUpperCase()
}
