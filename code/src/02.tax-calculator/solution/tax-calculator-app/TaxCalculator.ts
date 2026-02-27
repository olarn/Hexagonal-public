import { ForGetTaxRate } from "../driven-ports/forGetTaxRate"
import { ForCalculateTax } from "../driving-ports/forCalculateTax"

export class TaxCalculator implements ForCalculateTax {
  constructor(private readonly forGetTaxRate: ForGetTaxRate) { }

  calculateTax(salary: number): number {
    const taxRate = this.forGetTaxRate.getTaxRateFrom(salary)
    return salary * taxRate
  }
} 