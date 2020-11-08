// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2020 - birthYear;

console.log('Hello World');
*/

/*
const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
    // value: 10,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
