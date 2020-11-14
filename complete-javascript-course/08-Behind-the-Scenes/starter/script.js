'use strict';

/* ========== Scoping in Practice ========== */

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you are millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 5));
    }

    console.log(millennial);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/* ========== Hoisting and TDZ in Practice ========== */

/*
// Variable

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArr(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArr = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); // still invoke function deleteShoppingCart

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
const y = 2;
let z = 3;

// variables declare with var will create a property on the global window object
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

/* ========== The this Keyword in Practice ========== */

/* 
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/* ========== Regular Functions vs. Arrow Functions ========== */

/*
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const self = this;

    // const isMillenial = function () {
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keywords

const addExpr = function(a, b) {
  console.log(arguments);
  return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 6, 7);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}

// addArrow(2, 5); arguments is not defined

*/

/* ========== Objects vs. primitives ========== */

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me', me);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'David';

console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'David';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'David';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John')

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
