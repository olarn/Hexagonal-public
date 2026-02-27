import { PaymentPayload } from "../parking-services/ParkingServices";

export interface ForPaymentGateWay {
  submit(payload: PaymentPayload): string
}