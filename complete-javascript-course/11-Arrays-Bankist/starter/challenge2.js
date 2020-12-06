const dogAge = [5, 2, 4, 1, 15, 8, 3];
// const dogAge = [16, 6, 10, 5, 6, 1, 4];

const calcAverageDogAge = dogAge => {
  // const humanAge = dogAge.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const humanAge = dogAge.map(el => {
    if (el <= 2) return 2 * el;
    else return 16 + el * 4;
  });

  const dogAdult = humanAge.filter(el => el >= 18);

  const averageAgeDog = dogAdult.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );
  return averageAgeDog;
};

console.log(calcAverageDogAge(dogAge));
