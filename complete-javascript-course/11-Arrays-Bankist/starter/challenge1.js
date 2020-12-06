// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const logDogData = arr => {
  arr.forEach((el, i) => {
    if (el >= 3) {
      console.log(`Dog number ${i} is an adult, and is ${el} years old`);
    } else {
      console.log(`Dog number ${i} is still a puppy`);
    }
  });
};

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCopy = [...dogsJulia];

  const dogsJuliaCorrect = dogsJuliaCopy.slice(1, 3);
  const dogsKateCorrect = [...dogsKate];

  console.log('Julia Data');
  logDogData(dogsJuliaCorrect);
  console.log('Kate Data');
  logDogData(dogsKateCorrect);
};

checkDogs(dogsJulia, dogsKate);
