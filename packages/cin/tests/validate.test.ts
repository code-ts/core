import { describe, expect, it } from 'vitest'
import { validateCIN } from '../src'
import { invalidCodes, validCodes } from './fixtures'

describe('validateCIN', () => {
  it('all codes are valid', () => {
    validCodes.forEach(code => {
      expect(validateCIN(code)).toBeTruthy()
    })
  })

  it('all codes are invalid', () => {
    invalidCodes.forEach(code => {
      expect(validateCIN(code)).toBeFalsy()
    })
  })
})
