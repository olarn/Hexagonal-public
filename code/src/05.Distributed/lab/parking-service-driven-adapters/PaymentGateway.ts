import { ForPaymentGateWay } from "../parking-services-app/driven-ports/ForPaymentGateWay";
import { PaymentPayload } from "../parking-services-app/parking-services/ParkingServices";

export class MockPaymentGateWay implements ForPaymentGateWay {
  submit(payload: PaymentPayload): string {
    return 'Payment Success.';
  }
}