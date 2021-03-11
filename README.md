# Parking_lot
This programming assesement is written in typescipt with airbnb linter the file 

## Github Repo
https://github.com/royhanmardista/parking_lot.git

## How to setup
To setup simply run bin/setup or npm run setup 

## How to test
To test simply run bin/fun_functional_tests or npm run test

## How to run 
To run simply run bin/parking_lot or npm run start `filename.txt`

## Structure
```
├── bin
│   ├── parking_lot
│   ├── run_functional_tests
│   └── setup
├── dist
│   ├── index.js
│   ├── index.js.map
│   ├── models
│   │   ├── ParkingLot.js
│   │   ├── ParkingLot.js.map
│   │   ├── ParkingTicket.js
│   │   └── ParkingTicket.js.map
│   └── tests
│       ├── index.test.js
│       └── index.test.js.map
├── functional_spec
│   ├── fixtures
│   │   ├── file_input_invalid_car.txt
│   │   ├── file_input_invalid_command.txt
│   │   ├── file_input_invalid_parameter.txt
│   │   ├── file_input_invalid_parking_lot.txt
│   │   ├── file_input_messy_format.txt
│   │   └── file_input.txt
│   └── reports
│       └── report.txt
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── index.ts
│   ├── models
│   │   ├── ParkingLot.ts
│   │   └── ParkingTicket.ts
│   └── tests
│       └── index.test.ts
└── tsconfig.json
```