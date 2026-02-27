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

export interface ForAcceptParkingTransaction {
  payFor(transaction: ParkingTransaction): string
}