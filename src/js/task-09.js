const btnChangeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
})