'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High, guess again.';
    document.querySelector('.score').textContent = score;
    score = score - 1;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low, guess again.';
    document.querySelector('.score').textContent = score;
    score--;
  } else {
    document.querySelector('.message').textContent = 'You lost';
    document.body.style.backgroundColor = 'red';
  }
});
