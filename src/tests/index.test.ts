import { execSync } from 'child_process';

import assert from 'assert';

const expectedString = `Created parking lot with 6 slots
Allocated slot number: 1
Allocated slot number: 2
Allocated slot number: 3
Allocated slot number: 4
Allocated slot number: 5
Allocated slot number: 6
Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30
Slot No.    Registration No.
1           KA-01-HH-1234
2           KA-01-HH-9999
3           KA-01-BB-0001
4           KA-01-HH-7777
5           KA-01-HH-2701
Allocated slot number: 6
Sorry, parking lot is full
Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30
Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50
Registration number DL-12-AA-9999 not found
Allocated slot number: 1
Allocated slot number: 3
Sorry, parking lot is full
Slot No.    Registration No.
1           KA-09-HH-0987
2           KA-01-HH-9999
3           CA-09-IO-1111
4           KA-01-HH-7777
5           KA-01-HH-2701
6           KA-01-P-333
`;

const invalidParamsCount = `Created parking lot with 6 slots
Allocated slot number: 1
Allocated slot number: 2
Allocated slot number: 3
Allocated slot number: 4
Allocated slot number: 5
park require 1 parameter: park {car_number}.
leave require 2 parameters: leave {car_number} {hours}.
Slot No.    Registration No.
1           KA-01-HH-1234
2           KA-01-HH-9999
3           KA-01-BB-0001
4           KA-01-HH-7777
5           KA-01-HH-2701
Allocated slot number: 6
Sorry, parking lot is full
Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30
Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50
Registration number DL-12-AA-9999 not found
park require 1 parameter: park {car_number}.
Allocated slot number: 1
Allocated slot number: 3
Slot No.    Registration No.
1           CA-09-IO-1111
2           KA-01-HH-9999
3           KA-09-HH-0123
4           KA-01-HH-7777
5           KA-01-HH-2701
6           KA-01-P-333
`;

const invalidCarString = `Created parking lot with 6 slots
Allocated slot number: 1
Car already exist, please insert other carNumber
Slot No.    Registration No.
1           KA-01-HH-1234
Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 0
Allocated slot number: 1
Registration number KA-01-HH-1231 with Slot Number 1 is free with Charge 10
create_parking_lot require 1 parameter: create_parking_lot {capacity}.
`;

/**
 * Every test in javascipt will print its command separate by double enters from its stdout
 * > parking_lot@1.0.0 start /home/royhan23/Desktop/xendit/parking_lot
 * > node ./dist/index.js
 *
 * Stdout
 * so we need to since we only check the stdout we need to split the stdout and remove the command
 */
describe('Functional test', () => {
  it('Should return stdout exactly same as expectedString variable', () => {
    const result = execSync('npm run start file_input.txt', { encoding: 'utf8' });
    const stdout = result.split('\n\n');
    assert.strictEqual(stdout[1], expectedString);
  });

  it('Should return stdout exactly same as expectedString variable even with messed up input', () => {
    const result = execSync('npm run start file_input_messy_format.txt', { encoding: 'utf8' });
    const stdout = result.split('\n\n');
    assert.strictEqual(stdout[1], expectedString);
  });

  it('Should return invalid parking lot instance initiation', () => {
    const result = execSync('npm run start file_input_invalid_parking_lot.txt', { encoding: 'utf8' });
    const stdout = result.split('\n\n');
    assert.strictEqual(stdout[1], 'Please initiate parking lot atleast once at the first line of your file: create parking_lot {capacity}.\n');
  });

  it('Should return with invalid parameters count', () => {
    const result = execSync('npm run start file_input_invalid_parameter.txt', { encoding: 'utf8' });
    const stdout = result.split('\n\n');
    assert.strictEqual(stdout[1], invalidParamsCount);
  });

  it('Should return with invalid command', () => {
    const result = execSync('npm run start file_input_invalid_command.txt', { encoding: 'utf8' });
    const stdout = result.split('\n\n');
    assert.strictEqual(stdout[1], 'Created parking lot with 6 slots\nCommand not found.\n');
  });

  it('Should return with invalid car ticket', () => {
    const result = execSync('npm run start file_input_invalid_car.txt', { encoding: 'utf8' });
    const stdout = result.split('\n\n');
    assert.strictEqual(stdout[1], invalidCarString);
  });

  it('Should return with invalid file name', () => {
    const result = execSync('npm run start invalid_name.txt', { encoding: 'utf8' });
    const stdout = result.split('\n\n');
    assert.strictEqual(stdout[1], 'Invalid file name.\n');
  });
});
