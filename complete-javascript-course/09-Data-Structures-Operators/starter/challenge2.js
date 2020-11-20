'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [index, player] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1}: ${player}`);
}

let sum = 0;
for (const score of Object.values(game.odds)) {
  sum += score;
}

const scoreAverage = sum / Object.values(game.odds).length;
console.log(Object.values(game.odds).length);

let oddStr = '';
for (const key of Object.keys(game.odds)) {
  oddStr +=
    key !== 'x'
      ? `Odd of victory ${game[key]}: ${game.odds[key]}\n`
      : `Odd of draw: ${game.odds[key]}\n`;
}

console.log(oddStr);

const scorers = {};
for (const player of game.scored) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}

console.log(scorers);
