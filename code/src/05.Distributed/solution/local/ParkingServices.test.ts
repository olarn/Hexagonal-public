import { ParkingTransaction } from "./parking-service-driving-adapters/ForAcceptParkingTransaction"
import { ParkingServices } from "./parking-service-driving-adapters/ParkingServices"


describe('Parking Services', () => {

  const transaction: ParkingTransaction = {
    plateNo: 'กก.1111',
    parkingZone: 'zone1',
    paymentPayload: {
      transaction: 'PARKING_FEE',
      cardNo: '0000 1111 2222 3333',
      expireDate: new Date(),
      ccv: '000'
    }
  }

  it('should accept parking fee for 1 hour of choices.', () => {
    const parkingService = new ParkingServices()
    expect(
      parkingService.payFor(transaction)
    ).toEqual(
      `{"result": "Transaction saved.","pay": "Payment Success.","log": "Logged."}`
    )
  })
})


