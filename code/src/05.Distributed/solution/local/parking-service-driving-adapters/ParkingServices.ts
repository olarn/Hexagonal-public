import { ForAcceptParkingTransaction, ParkingTransaction } from "./ForAcceptParkingTransaction";

export class ParkingServices implements ForAcceptParkingTransaction {
  payFor(transaction: ParkingTransaction): string {
    // implement remote API call.
    return `{"result": "Transaction saved.","pay": "Payment Success.","log": "Logged."}`
  }
}