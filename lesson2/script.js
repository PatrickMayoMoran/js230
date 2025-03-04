document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    let guess = parseInt(input.value, 10);
    let message;
    guesses += 1;

    if (guess > answer) {
      message = "Too high!";
    } else if (guess < answer) {
      message = "Too low!";
    } else {
      message = "Correct!";
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', e => {
    e.preventDefault();
    newGame();
  });

  newGame();
});
