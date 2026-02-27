import { ForCalculateTax } from "./driving-ports/forCalculateTax"
import { ForGetTaxRate } from "./driven-ports/forGetTaxRate"
import { TaxRateRepository } from "./tax-calculator-app/TaxRateRepository"
import { TaxCalculator } from "./tax-calculator-app/TaxCalculator"

describe('TaxCalculator', () => {
  it('should calculate the tax correctly', () => {
    const fromTaxRateRepository: ForGetTaxRate = new TaxRateRepository()
    const taxCalculator: ForCalculateTax = new TaxCalculator(fromTaxRateRepository)
    const tax = taxCalculator.calculateTax(10000)
    expect(tax).toBe(1000)
  })
})