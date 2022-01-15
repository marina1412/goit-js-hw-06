const buttonMinRef = document.querySelector('button[data-action ="decrement"]');
const buttonAddRef = document.querySelector('button[data-action ="increment"]');
const valueRef = document.getElementById('value');

let counterValue = 0;

const minusValue = () => { 
    counterValue -= 1;
    valueRef.textContent = counterValue;
}
const addValue = () => { 
    counterValue += 1;
    valueRef.textContent = counterValue;
}

buttonAddRef.addEventListener("click", addValue);
buttonMinRef.addEventListener("click", minusValue);

