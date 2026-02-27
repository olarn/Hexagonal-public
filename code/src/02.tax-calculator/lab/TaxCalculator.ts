import { TaxRateRepository } from "./TaxRateRepository"

export class TaxCalculator {
  calculateTax(salary: number): number {
    const taxRepository = new TaxRateRepository()
    const taxRate = taxRepository.getTaxRateFrom(salary)
    return salary * taxRate
  }
}

