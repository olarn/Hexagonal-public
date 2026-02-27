import { ForParkingLog } from "../parking-services-app/driven-ports/ForParkingLog";
import { ParkingTransaction } from "../parking-services-app/parking-services/ParkingServices";

export class MockSysLog implements ForParkingLog {
  write(parkingTransaction: ParkingTransaction): string {
    return 'Logged.';
  }
}
