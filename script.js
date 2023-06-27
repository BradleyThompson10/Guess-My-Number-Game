'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '👍 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//delete this after testing
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 🚫';

    //When player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//working on this

document.querySelector('.again').addEventListener('click', function () {
  //changes message box back to start guessing
  document.querySelector('.message').textContent = 'Start guessing...';
  //html ans css reset
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.number').textContent = '?';
  //changes score back to 20
  score = 20;
  document.querySelector('.score').textContent = score;
  //changes text box to empty
  document.querySelector('.guess').value = '';
  // generates a new random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //displays .number as a ? to the player
  document.querySelector('.number').textContent = '?';
});
