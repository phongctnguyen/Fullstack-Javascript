/* ========== Strict Mode ========== */

/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive😀');
*/

/* ========== Functions ========== */

/*
function logger() {
  console.log('My name is Jonas');
}

logger(); // calling / running / invoking

function fruitProcessor(apples, oranges) { // apples - oranges: parameters
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(4, 6); // 4 - 6: arguments

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)
*/

/* ========== Function Declarations & Function Expressions ========== */

/*
function calcAge1(birthYear) { // Function Declarations
  const age = 2020 - birthYear;
  return age;
}

const age1 = calcAge1(1992);
console.log(age1);

const calcAge2 = function (birthYear) { // Function Expressions
  const age = 2020 - birthYear;
  return age;
};

const age2 = calcAge2(1992);
console.log(age2);
*/

/* ========== Arrow Functions ========== */

/*
const calcAge3 = (birthYear) => 2020 - birthYear; // Arrow Functions

const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1992, 'Jonas'));
*/

/* ========== Functions calling other Functions ========== */

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/* ========== Arrays ========== */

/*
const friends = ['Michael', 'Stevens', 'Peter'];

console.log(friends);
console.log(friends[0]);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const yearsArr = new Array(1991, 1992, 2019, 2020);
console.log(yearsArr);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 32, friends];
console.log(jonas);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/* ========== Array Methods ========== */

/*
const friends = ['Michael', 'Stevens', 'Peter'];

const newLength = friends.push('Messi');
console.log(friends);
console.log(newLength); // 4

const newLength1 = friends.unshift('Ronaldo');
console.log(friends);
console.log(newLength1); // 5

const elementRemove = friends.pop();
console.log(friends);
console.log(elementRemove); // Messi

const elementRemove1 = friends.shift();
console.log(friends);
console.log(elementRemove1); // Ronaldo

console.log(friends.indexOf('Stevens')); // 1
console.log(friends.indexOf('Bob')); // -1

friends.push(23);
console.log(friends.includes('Stevens')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
}
*/

/* ========== Objects ========== */

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas[`first${nameKey}`]);

let interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request!');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasSchmedtmann';
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

/* ========== Object Methods ========== */

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(jonas['calcAge']()); // 46
console.log(jonas.calcAge()); // 46
console.log(jonas.age); // 46

console.log(jonas.getSummary());
*/

/* ========== For Loop ========== */

/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`)
}
*/

/* ========== Looping Arrays, Breaking & Continuing ========== */

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], ' - ', typeof jonas[i]);
}

const types = [];

for (let i = 0; i < jonas.length; i++) {
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2019];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2020 - years[i]);
}

console.log(ages);

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}
*/

/* ========== Looping Backwards and Loops in Loops ========== */

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/

/* ========== While Loop ========== */

/*
let rep = 1;

while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/