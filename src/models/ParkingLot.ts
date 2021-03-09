import ParkingTicket from './ParkingTicket';

/**
 * ParkingLot class that will generate object parking lot
 */
class ParkingLot {
  protected maxSpace: number;

  protected feePerHour: number;

  protected parkingTickets: ParkingTicket[] = [];

  constructor(maxSpace: number, feePerHour = 7.5) {
    this.maxSpace = maxSpace;
    this.feePerHour = feePerHour;
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
    if (this.parkingTickets.length >= this.maxSpace) {
      console.log('Sorry, parking lot is full');
    } else {
      const foundTicketIndex = this.findCarTicket(carNumber);

      if (foundTicketIndex !== -1) {
        console.log('Car already exist, please insert other carNumber');
      } else {
        const parkingTicket = new ParkingTicket(carNumber);
        this.parkingTickets.push(parkingTicket);
        console.log(`Allocated slot number: ${this.parkingTickets.length}`);
      }
    }
  }

  // Remove car for parking spot
  leavePark(carNumber: string, timeSpent: number) {
    const foundTicketIndex = this.findCarTicket(carNumber);
    if (foundTicketIndex !== -1) {
      const cost = timeSpent * this.feePerHour;
      console.log(`Registration number ${this.parkingTickets[foundTicketIndex].carNumber} with Slot Number ${foundTicketIndex + 1} is free with Charge ${cost}`);
      this.parkingTickets.splice(foundTicketIndex, 1);
    } else {
      console.log('Car could not be founded, please insert other carNumber');
    }
  }

  // Logs car status
  parkStatus() {
    console.log('Slot No. Registration No.');
    this.parkingTickets.forEach((item) => {
      console.log(`1 ${item.carNumber}`);
    });
  }
}

export default ParkingLot;
