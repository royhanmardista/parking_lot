"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ParkingLot_1 = __importDefault(require("./models/ParkingLot"));
const file = fs_1.readFileSync('./file_input.txt', 'utf-8');
const arrayOfCommand = file.split('\n').map((item) => item.split(' '));
let parkingTicket;
arrayOfCommand.forEach((item) => {
    const command = item[0];
    switch (command) {
        case 'create_parking_lot':
            parkingTicket = new ParkingLot_1.default(parseInt(item[1], 10));
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
//# sourceMappingURL=index.js.map