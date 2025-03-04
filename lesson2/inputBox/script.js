document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector(".text-field");
  let cursorInterval;

  textField.addEventListener('click', e => {
    e.stopPropagation();
    textField.classList.add('focused');

    cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('keydown', e => {
    if (textField.classList.contains('focused')) {
      let contentDiv = textField.querySelector(".content");
      contentDiv.textContent += e.key;
    }
  });

  document.addEventListener('click', e => {
    clearInterval(cursorInterval);
    if (textField.classList.contains('focused')) {
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  });
});
