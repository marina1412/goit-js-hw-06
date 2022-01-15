const btnChangeColorRef = document.querySelector('.change-color');
const nameColorRef = document.querySelector('.color');

btnChangeColorRef.addEventListener('click', () => {
  const colorOfBody = getRandomHexColor();
  document.body.style.backgroundColor = colorOfBody;
  nameColorRef.textContent = colorOfBody;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}