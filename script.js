'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No Number 🚫');

    //When player Wins
  } else if (guess === secretNumber) {
    displayMessage('👍 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost the Game');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //changes message box back to start guessing
  displayMessage('Start guessing...');
  //html ans css reset
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  //changes score back to 20
  score = 20;
  displayScore(score);
  //changes text box to empty
  document.querySelector('.guess').value = '';
  // generates a new random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
