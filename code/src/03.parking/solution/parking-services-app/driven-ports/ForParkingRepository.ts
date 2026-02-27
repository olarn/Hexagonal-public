import { ParkingTransaction } from "../parking-services/ParkingServices";

export interface ForParkingRepository {
  save(transaction: ParkingTransaction): string
}