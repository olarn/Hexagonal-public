
export class TaxRateRepository {
  getTaxRateFrom(salary: number): number {
    if (salary < 10001) {
      return 0.1
    } else if (salary < 20001) {
      return 0.2
    } else {
      return 0.3
    }
  }
}
