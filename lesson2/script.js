document.addEventListener('DOMContentLoaded', () => {
  let answer = Math.floor(Math.random() * 100) + 1;
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');

  form.addEventListener('submit', e => {
    event.preventDefault();
    let guess = ParseInt(input.value, 10);
    let message;
  });
});
