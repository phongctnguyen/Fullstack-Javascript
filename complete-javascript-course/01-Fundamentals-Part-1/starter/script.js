/* ========== Fundamentals ========== */

/*
let js = 'amazing';
console.log(45 * 6 + 16 - 8);

console.log('Jonas');
console.log(23);

let firstName = 'Bob';
console.log(firstName);

let PI = 3.14;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
*/

/* ========== Primitive value ========== */

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Phong');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);
*/

/* ========== Variable Declaration ========== */
/*
let age = 30;
age = 31;

const birthYear = 1994;
*/
// birthYear = 1995; TypeError: Assignment to constant variable

// const job; SyntaxError: Missing initializer in const declaration

/* ========== Basic Operators ========== */

// Math operators
/*
const now = 2020;
const agePhong = now - 1994;
const ageSarah = now - 1987;
console.log(agePhong, ageSarah);

console.log(agePhong * 2, ageSarah / 2);
console.log(agePhong * 2, ageSarah / 2, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
*/

// Assignment operators
/*
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);
*/

// Comparison operators
/*
console.log(agePhong > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 1985);
*/

/* ========== Operator Precedence ========== */

/*
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const now = 2020;
const agePhong = now - 1994;
const ageSarah = now - 1987;
const averageAge = (agePhong + ageSarah) / 2;
console.log(averageAge)
*/

/* ========== Strings and Template Literals ========== */

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2020;

const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonas);

console.log('String \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/* ========== Taking Decisions: If/Else ========== */

/*
const age = 12;

if (age >= 18) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/* ========== Type Conversion and Coercion ========== */

/*
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Phong')); // NaN
console.log(typeof NaN); // number
console.log(String(24));

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' > '10');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/* ========== Truthy and Falsy Values ========== */

// Falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(''));
console.log(Boolean(23));

const money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 74;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/

/* ========== Equality Operators ========== */

/*
const age = '18';

if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)'); // avoid

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number');
} else if (favorite === 7) {
  console.log('7 is also a cool number!');
} else {
  console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('Why not 23?');
*/

/* ========== Logical Operators ========== */

/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive ...');
}
*/

/* ========== Switch Statement ========== */

/*
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
*/

/* ========== Ternary Operator ========== */

const age = 23;

age >= 18
  ? console.log('I like to drink wine!')
  : console.log('I like to drink water!');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
