'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
/*document.querySelector('.number').textContent = secret;*/

document.querySelector('.check').addEventListener('click', function () {
  const ans = document.querySelector('.guess').value;
  //When Player does't input
  if (!ans) {
    document.querySelector('.message').textContent = '⭕No Input Detected';

    //When Answer Is
  } else if (ans == secret) {
    document.querySelector('.message').textContent = '🎉Correct Answer';
    document.querySelector('.number').textContent = secret;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (ans != secret) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ans > secret ? '📈Too High' : '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#c92a2a';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secret = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing ....';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
