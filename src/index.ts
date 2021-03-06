import { readFileSync } from 'fs';
import ParkingLot from './models/ParkingLot';

const filename = process.argv[2];
try {
  const file = readFileSync(`./functional_spec/fixtures/${filename}`, 'utf-8');
  const arrayOfCommand = file.split('\n')
    .map((item) => item.trim())
    .map((item) => item.split(/\s* \s*/));

  let parkingTicket: ParkingLot;

  for (let i = 0; i < arrayOfCommand.length; i += 1) {
    const item = arrayOfCommand[i];
    const command = item[0];
    switch (command) {
      case 'create_parking_lot':
        if (item.length < 2 || Number.isNaN(parseInt(item[1], 10))) {
          console.log('create_parking_lot require 1 parameter: create_parking_lot {capacity}.');
        } else {
          parkingTicket = new ParkingLot(parseInt(item[1], 10));
        }
        break;
      case 'park':
        if (parkingTicket) {
          if (item.length < 2) {
            console.log('park require 1 parameter: park {car_number}.');
          } else {
            parkingTicket.parkCar(item[1]);
          }
        }
        break;
      case 'leave':
        if (parkingTicket) {
          if (item.length < 3 || Number.isNaN(parseFloat(item[2]))) {
            console.log('leave require 2 parameters: leave {car_number} {hours}.');
          } else {
            parkingTicket.leavePark(item[1], parseFloat(item[2]));
          }
        }
        break;
      case 'status':
        if (parkingTicket) {
          parkingTicket.parkStatus();
        }
        break;
      default:
        console.log('Command not found.');
    }
    if (!parkingTicket) {
      console.log('Please initiate parking lot atleast once at the first line of your file: create parking_lot {capacity}.');
      break;
    }
  }
} catch (e) {
  console.log('Invalid file name.');
}
