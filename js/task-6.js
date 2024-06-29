function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divControls = document.querySelector('#controls');
const boxContainer = document.querySelector('#boxes');
const createBtn = divControls.querySelector('[data-create]');
const destroyBtn = divControls.querySelector('[data-destroy]');
const input = divControls.querySelector('input');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }
  createBoxes(amount);
  input.value = '';
});
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxContainer.appendChild(fragment);
}
function destroyBoxes() {
  boxContainer.innerHTML = '';
}
