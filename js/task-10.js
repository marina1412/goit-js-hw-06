const countOfDiv = document.getElementsByTagName('input');
const number = countOfDiv.value;
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const size = 20;
const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const array = [];
  for (let i = 0; i <= amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = size + 10*i + 'px';
    element.style.height = size + 10*i + 'px';
    element.style.color = red;
    element.style.backgroundColor = getRandomHexColor;
    array.push(element);
    console.log(array);
   }
  return boxes.append(...array);
}


buttonCreate.addEventListener('click', createBoxes(number));
 



