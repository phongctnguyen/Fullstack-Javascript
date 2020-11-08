const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(`Dolphins average score: ${avgDolphins}`)
console.log(`Koalas average score: ${avgKoalas}`)

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) console.log('Dolphins wins');
  else if (avgKoalas >= avgDolphins * 2) console.log('Koalas wins');
  else console.log('No team wins');
};

checkWinner(avgDolphins, avgKoalas);
