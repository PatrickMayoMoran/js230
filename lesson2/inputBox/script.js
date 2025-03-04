document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector(".text-field");

  textField.addEventListener('click', e => {
    textField.classList.add('focused');
  });
});
