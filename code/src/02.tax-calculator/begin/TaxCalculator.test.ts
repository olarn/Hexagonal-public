import { TaxCalculator } from "./TaxCalculator"

describe('TaxCalculator', () => {
  it('should calculate the tax correctly', () => {
    const taxCalculator = new TaxCalculator()
    const tax = taxCalculator.calculateTax(10000)
    expect(tax).toBe(1000)
  })
})