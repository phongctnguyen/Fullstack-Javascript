'use strict';
/*
console.log(document.querySelector('.message').textContent);

// window + . => emoji
document.querySelector('.message').textContent = '🍕 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('input.guess').value = 23;
*/
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const checkElement = document.querySelector('.check');
const guessElement = document.querySelector('.guess');
const bodyElement = document.querySelector('body');
const scoreElement = document.querySelector('.score');
const againElement = document.querySelector('.again');
const highScoreElement = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
numberElement.textContent = secretNumber;

let score = 20;
let highScore = 0;

const displayMessage = message => (messageElement.textContent = message);

checkElement.addEventListener('click', () => {
  const guess = Number(guessElement.value);

  // when there is no input
  if (!guess) {
    displayMessage('🚫 No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🍕 Correct Number!');
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆ Too high!' : '⬇ Too low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('☢ You lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

againElement.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  displayMessage('Start guessing...');
  numberElement.textContent = '?';
  scoreElement.textContent = score;
  guessElement.value = '';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
