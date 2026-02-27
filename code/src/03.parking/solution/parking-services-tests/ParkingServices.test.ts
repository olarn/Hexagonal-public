import { ForPaymentGateWay } from "../parking-services-app/driven-ports/ForPaymentGateWay"
import { ForParkingRepository } from "../parking-services-app/driven-ports/ForParkingRepository"
import { ParkingServices, ParkingTransaction } from "../parking-services-app/parking-services/ParkingServices"
import { ForParkingLog } from "../parking-services-app/driven-ports/ForParkingLog"
import { ForAcceptParkingTransaction } from "../parking-services-app/driving-ports/ForAcceptParkingTransaction"

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
    const mockParkingRepo: ForParkingRepository = { save: jest.fn().mockReturnValue('Transaction saved.') }
    const mockPaymentGateWay: ForPaymentGateWay = { submit: jest.fn().mockReturnValue('Payment Success.') }
    const mockSysLog: ForParkingLog = { write: jest.fn().mockReturnValue('Logged.') }

    const parkingService: ForAcceptParkingTransaction = new ParkingServices(
      mockParkingRepo,
      mockPaymentGateWay,
      mockSysLog
    )

    expect(
      parkingService.payFor(transaction)
    ).toEqual(
      `{"save": "Transaction saved.","pay": "Payment Success.","log": "Logged."}`
    )
  })
})


