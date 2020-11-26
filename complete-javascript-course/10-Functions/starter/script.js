'use strict';

/* ========== Default Parameters ========== */

/*
const bookings = [];

const createBooking = (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/* ========== How Passing Arguments Works: Values vs. Reference ========== */

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log('Check in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);
*/

/* ========== Functions Accepting Callback Functions ========== */

/*
const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/* ========== Functions Returning Functions ========== */

/*
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Phong');
greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Santi');
*/

/* ========== The call, apply and bind Methods ========== */

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(625, 'Ivan');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// call method
const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 237, 'Mary');
console.log(lufthansa);

// apply method
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const flightData = [583, 'George'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);
console.log(swiss);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven');

const bookEW23 = book.bind(eurowings, 23);
const bookEW24 = book.bind(eurowings, 24, 'Jim');
bookEW23('Strange');
bookEW24();

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// document
//   .querySelector('.buy')
//   .addEventListener('click', () => lufthansa.buyPlane());

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/* ========== Immediately Invoked Function Expressions (IIFE) ========== */

/*
const runOnce = () => {
  console.log('This will never run again!');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again!');
})();

(() => {
  console.log('This will never run again!');
})();
*/

/* ========== Closures ========== */

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// More Examples

// Example 1
let f;

const g = () => {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = () => {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function
h();
f();

// Example 2
const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);