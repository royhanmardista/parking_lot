/**
 * ParkingTicket class that will generate object for parking ticket
 */
class ParkingTicket {
  readonly carNumber: string;

  readonly slotNumber: number;

  constructor(carNumber: string, slotNumber: number) {
    this.carNumber = carNumber;
    this.slotNumber = slotNumber;
  }
}

export default ParkingTicket;
