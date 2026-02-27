import { ParkingTransaction } from "../parking-services/ParkingServices";

export interface ForParkingLog {
  write(parkingTransaction: ParkingTransaction): string
}