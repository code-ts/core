import { assertType, describe, expectTypeOf, it } from 'vitest'
import { validateCIN } from '../src'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(validateCIN).returns.toBeBoolean()
  })

  it('should params type match', () => {
    assertType<(code: string) => boolean>(validateCIN)

    expectTypeOf(validateCIN).parameter(0).toBeString()
  })
})
