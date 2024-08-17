import { expect, it } from 'vitest'
import { validateCIN } from '../src'

export const FIXTURES = {
  validCodes: [
    // beiJing
    '110101199003076878',
    // xinjiang
    '650102199003071155',
    // neimenggu
    '15292119900307431X',

    // 北京
    '11010120000728221X',
    '110101200007287619',

    // 河南
    '410103200007280517',
    '41010320000728151X',

    // 四川
    '510704200007288204',
    '51070420000728780X',
  ],

  inValidCodes: [
    // Length
    '',
    '110',
    '5107042000072882041',

    // Pattern
    '110101200007327619',
    '11010120000728761Y',

    // Checksum
    '410103200007280518',
    '51070420000728820X',
  ],
}

FIXTURES.validCodes.forEach(code => {
  it(`validCode - ${code}`, () => {
    expect(validateCIN(code)).toBeTruthy()
  })
})

FIXTURES.inValidCodes.forEach(code => {
  it(`inValidCode - ${code}`, () => {
    expect(validateCIN(code)).toBeFalsy()
  })
})
