import { ForParkingLog } from "../driven-ports/ForParkingLog"
import { ForParkingRepository } from "../driven-ports/ForParkingRepository"
import { ForPaymentGateWay } from "../driven-ports/ForPaymentGateWay"
import { ForAcceptParkingTransaction } from "../driving-ports/ForAcceptParkingTransaction"

export type ParkingTransaction = Readonly<{
  plateNo: string
  parkingZone: string
  paymentPayload: PaymentPayload
}>

export type PaymentPayload = Readonly<{
  transaction: string
  cardNo: string
  expireDate: Date
  ccv: string
}>

export class ParkingServices implements ForAcceptParkingTransaction {
  constructor(
    private readonly repository: ForParkingRepository,
    private readonly paymentGateWay: ForPaymentGateWay,
    private readonly syslog: ForParkingLog
  ) { }

  payFor(transaction: ParkingTransaction): string {
    const saveRepoResult = this.repository.save(transaction)
    const paymentResult = this.paymentGateWay.submit(transaction.paymentPayload)
    const logResult = this.syslog.write(transaction)
    return `{"save": "${saveRepoResult}","pay": "${paymentResult}","log": "${logResult}"}`
  }
}