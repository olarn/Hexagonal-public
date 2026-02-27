import { ParkingTransaction } from "../parking-services/ParkingServices";

export interface ForAcceptParkingTransaction {
  payFor(transaction: ParkingTransaction): string
}