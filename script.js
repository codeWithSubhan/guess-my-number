'use strict';

let number = Math.trunc(Math.random() * 6) + 1;
let score = 20;
let highscore = 0;
console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'empty number';
  } else if (guess === number) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      console.log(highscore);
    }
    document.querySelector('.message').textContent = '✔ correct Number';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'too low';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost Game! 😢';
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'too high';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost Game! 😢';
    }
  } else {
    document.querySelector('.message').textContent = 'empty or invalid number';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
