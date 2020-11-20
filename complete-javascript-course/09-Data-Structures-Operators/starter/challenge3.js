const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = new Set();

for (const event of gameEvents.values()) {
  events.add(event);
}
console.log(events);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

for (const [key, value] of gameEvents) {
  console.log(value);
  if (key === 64) {
    gameEvents.delete(key);
  }
}
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  const round = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${round} ${key}: ${value}`);
}
