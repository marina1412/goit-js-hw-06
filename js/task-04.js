let counterValue = 0;
const buttonMin = document.querySelector('button[data-action ="decrement"]');
const buttonAdd = document.querySelector('button[data-action ="increment"]');
const value = document.getElementById('value');

const minusValue = () => { 
    counterValue -= 1;
    value.textContent = counterValue;
}
buttonMin.addEventListener("click", minusValue);

const addValue = () => { 
    counterValue += 1;
    value.textContent = counterValue;
}
buttonAdd.addEventListener("click", addValue);


