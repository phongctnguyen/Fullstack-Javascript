const calcTip = (value) => {
  if (value >= 50 && value <= 300) return value * 0.15;
  return value * 0.2;
};

const calcTotal = (bill, tip) => bill + tip;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [
  calcTotal(bills[0], tips[0]),
  calcTotal(bills[1], tips[1]),
  calcTotal(bills[2], tips[2]),
];

console.log(tips);
console.log(total);
