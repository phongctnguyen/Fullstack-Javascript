const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (value) => {
  if (value >= 50 && value <= 300) return value * 0.15;
  return value * 0.2;
};

const calcTotal = (bill, tip) => bill + tip;

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(calcTotal(bills[i], tip));
}

console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
