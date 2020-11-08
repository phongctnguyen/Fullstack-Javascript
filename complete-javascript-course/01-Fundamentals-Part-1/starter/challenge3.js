// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(dolphinsAverage);

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;
// const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//   console.log('Dolphins Team wins');
// } else if (koalasAverage > dolphinsAverage) {
//   console.log('Koalas Team wins');
// } else {
//   console.log('Draw');
// }

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;
// const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(dolphinsAverage);

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;
// const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(koalasAverage);

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;
const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log(dolphinsAverage);

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log('Dolphins Team wins');
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log('Koalas Team wins');
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log('Both Team wins');
} else {
  console.log('No Team wins');
}
