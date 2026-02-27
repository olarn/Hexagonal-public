import { ForParkingRepository } from "../parking-services-app/driven-ports/ForParkingRepository";
import { ParkingTransaction } from "../parking-services-app/parking-services/ParkingServices";

export class MockParkingRepo implements ForParkingRepository {
  save(transaction: ParkingTransaction): string {
    return 'Transaction saved.';
  }
}
