document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector(".text-field");
  let cursorInterval;

  textField.addEventListener('click', e => {
    e.stopPropagation();
    textField.classList.add('focused');

    cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('click', e => {
    clearInterval(cursorInterval);
    textField.classList.remove('focused');
    textField.classList.remove('cursor');
  });
});
