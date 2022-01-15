const boxesRef = document.getElementById('boxes');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const inputValueRef = document.querySelector('input');
const size = 20;

const createBoxes = (amount) => {
 amount = inputValueRef.value;
  for (let i = 1; i <= amount; i += 1) { 
  const divEl = document.createElement('div');
  divEl.style.width = size + i*10 + 'px';
  divEl.style.height = size + i*10  + 'px';
  divEl.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(divEl);
}
}

const destroyBoxes = (amount) => {
  amount = inputValueRef.value;
  for (let i = 1; i <= amount; i += 1) { 
    const child = boxesRef.firstElementChild;
    child.remove();
    inputValueRef.value = '';
    
}
}

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

