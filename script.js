'use strict';

let guessNum = document.querySelector('.guess');
let message = document.querySelector('.message');
let scoreNum = document.querySelector('.score');
let checkBtn = document.querySelector('.check');
let bodyStyle = document.querySelector('body');
let num = document.querySelector('.number');
let highscoreNum = document.querySelector('.highscore');
let again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

checkBtn.addEventListener('click', () => {
  let guess = Number(guessNum.value);
  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    bodyStyle.style.backgroundColor = '#60b347';
    num.textContent = secretNumber;
    checkBtn.style.display = 'none';

    if (score > highscore) {
      highscore = score;
      highscoreNum.textContent = highscore;
    }

    num.style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high!';
      score--;
      scoreNum.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreNum.textContent = 0;
      bodyStyle.style.backgroundColor = 'red';
      checkBtn.style.display = 'none';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low!';
      score--;
      scoreNum.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreNum.textContent = 0;
      bodyStyle.style.backgroundColor = 'red';
      checkBtn.style.display = 'none';
    }
  }
});

again.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  guessNum.value = '';
  scoreNum.textContent = score;
  bodyStyle.style.backgroundColor = '#222';
  message.textContent = 'Start guessig...';
  num.textContent = '?';
  num.style.width = '15rem';
  checkBtn.style.display = 'block';
});
