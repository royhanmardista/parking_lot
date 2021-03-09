/**
 * ParkingTicket class that will generate object for parking ticket
 */
class ParkingTicket {
  readonly carNumber: string;

  constructor(carNumber: string) {
    this.carNumber = carNumber;
  }
}

export default ParkingTicket;
