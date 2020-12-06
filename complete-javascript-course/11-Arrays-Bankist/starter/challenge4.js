const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
dogs.forEach(dog => {
  dog.recommendFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Task 2
dogs.map(dog => {
  if (dog.owners.includes('Sarah')) {
    if (dog.recommendFood < dog.curFood) {
      console.log('Eating too much');
    } else if (dog.recommendFood > dog.curFood) {
      console.log('Eating too little');
    }
  }
});

// Task 3
const ownersEatTooLittle = dogs.filter(dog => dog.recommendFood > dog.curFood).flatMap(dog => dog.owners);
const ownersEatTooMuch =  dogs.filter(dog => dog.recommendFood < dog.curFood).flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// Task 4
let logDogEatTooLittle = '';
let logDogEatTooMuch = '';

ownersEatTooLittle
  .map(dog => dog.owners)
  .flat()
  .forEach(
    (dog, i, arr) =>
      (logDogEatTooLittle +=
        i < arr.length - 1 ? `${dog} and ` : `${dog}'s dogs eat too little`)
  );

ownersEatTooMuch
  .map(dog => dog.owners)
  .flat()
  .forEach(
    (dog, i, arr) =>
      (logDogEatTooMuch +=
        i < arr.length - 1 ? `${dog} and ` : `${dog}'s dogs eat too much`)
  );

console.log(logDogEatTooLittle);
console.log(logDogEatTooMuch);

// Task 5
console.log(dogs.some(dog => dog.recommendFood === dog.curFood));

// Task 6
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendFood * 0.9 &&
  dog.curFood < dog.recommendFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// Task 7
console.log(dogs.filter(checkEatingOkay));

// Task 8
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendFood - b.recommendFood);
console.log(dogsSorted);
