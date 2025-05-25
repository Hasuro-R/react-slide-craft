import { describe, it, expect } from 'vitest'
import { getPaddings } from "../../utils/getPaddings"

describe('success', () => {
  it('element is one', () => {
    expect(getPaddings('10')).toStrictEqual(['10', '10', '10', '10'])
  })
})
