'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

changeColorBtn.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});
