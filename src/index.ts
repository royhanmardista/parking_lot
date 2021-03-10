import { readFileSync } from 'fs';
import ParkingLot from './models/ParkingLot';

const file = readFileSync('./file_input.txt', 'utf-8');

const arrayOfCommand = file.split('\n').map((item) => item.split(' '));

let parkingTicket: ParkingLot;

for (let i = 0; i < arrayOfCommand.length; i += 1) {
  const item = arrayOfCommand[i];
  const command = item[0];
  switch (command) {
    case 'create_parking_lot':
      if (item.length < 2) {
        console.log('create_parking_lot require 1 parameter: create_parking_lot {capacity}');
      } else {
        parkingTicket = new ParkingLot(parseInt(item[1], 10));
      }
      break;
    case 'park':
      if (parkingTicket) {
        if (item.length < 2) {
          console.log('park require 1 parameter: park {car_number}');
        } else {
          parkingTicket.parkCar(item[1]);
        }
      }
      break;
    case 'leave':
      if (parkingTicket) {
        if (item.length < 3) {
          console.log('leave require 2 parameters: leave {car_number} {hours}');
        } else {
          parkingTicket.leavePark(item[1], parseInt(item[2], 10));
        }
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
  if (!parkingTicket) {
    console.log('Please initate parking lot at list once at the first line of your file: create_parking_lot {capacity}');
    break;
  }
}
