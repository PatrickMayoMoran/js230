document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector(".text-field");

  textField.addEventListener('click', e => {
    e.stopPropagation();
    textField.classList.add('focused');
  });

  document.addEventListener('click', e => {
    textField.classList.remove('focused');
  });
});
