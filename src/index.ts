import { readFileSync } from 'fs';
import ParkingLot from './models/ParkingLot';

const file = readFileSync('./file_input.txt', 'utf-8');

const arrayOfCommand = file.split('\n').map((item) => item.split(' '));

let parkingTicket: ParkingLot;
arrayOfCommand.forEach((item) => {
  const command = item[0];
  switch (command) {
    case 'create_parking_lot':
      parkingTicket = new ParkingLot(parseInt(item[1], 10));
      break;
    case 'park':
      if (parkingTicket) {
        parkingTicket.parkCar(item[1]);
      }
      break;
    case 'leave':
      if (parkingTicket) {
        parkingTicket.leavePark(item[1], parseInt(item[2], 10));
      }
      break;
    case 'status':
      if (parkingTicket) {
        parkingTicket.parkStatus();
      }
      break;
    default:
      console.log('Command not found');
  }
});
