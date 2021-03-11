import ParkingTicket from './ParkingTicket';

/**
 * ParkingLot class that will generate object parking lot
 */
class ParkingLot {
  protected maxSpace: number;

  protected feePerHour = 10;

  protected parkingTickets: ParkingTicket[] = [];

  protected emptySlots: number[] = []

  constructor(maxSpace: number) {
    this.maxSpace = maxSpace;
    this.emptySlots = [...Array(maxSpace).keys()];
    console.log(`Created parking lot with ${maxSpace} slots`);
  }

  // Check if car ticket with related carNumber exist
  findCarTicket(carNumber: string): number {
    const foundTicketIndex = this.parkingTickets.findIndex((item) => (item.carNumber === carNumber));
    return foundTicketIndex;
  }

  /**
   * Create instance of parking ticket and add it to parkingTickets
   * @param carNumber carNumber for instance of parking ticket
   */
  parkCar(carNumber: string) {
    const foundTicketIndex = this.findCarTicket(carNumber);
    if (foundTicketIndex !== -1) {
      console.log('Car already exist, please insert other carNumber');
    } else if (this.emptySlots.length) {
      const emptySlot = this.emptySlots[0];
      const parkingTicket = new ParkingTicket(carNumber, emptySlot);
      this.parkingTickets.splice(emptySlot, 0, parkingTicket);
      this.emptySlots.shift();
      console.log(`Allocated slot number: ${emptySlot + 1}`);
    } else {
      console.log('Sorry, parking lot is full');
    }
  }

  // Remove car for parking spot
  leavePark(carNumber: string, timeSpent: number) {
    const foundTicketIndex = this.findCarTicket(carNumber);
    if (foundTicketIndex !== -1) {
      const parkingTicket = this.parkingTickets[foundTicketIndex];
      this.emptySlots.splice(parkingTicket.slotNumber, 0, parkingTicket.slotNumber);
      this.parkingTickets.splice(foundTicketIndex, 1);
      console.log(`Registration number ${carNumber} with Slot Number ${parkingTicket.slotNumber + 1} is free with Charge ${this.countFee(timeSpent)}`);
    } else {
      console.log(`Registration number ${carNumber} not found`);
    }
  }

  // Logs car status
  parkStatus() {
    console.log('Slot No.    Registration No.');
    this.parkingTickets.forEach((item) => {
      console.log(`${item.slotNumber + 1}           ${item.carNumber}`);
    });
  }

  // Get fee for leaving car
  protected countFee(timeSpent: number): number {
    if (timeSpent <= 0) {
      return 0;
    } if (timeSpent <= 2) {
      return this.feePerHour;
    }
    return this.feePerHour + ((timeSpent - 2) * this.feePerHour);
  }
}

export default ParkingLot;
