const textInputRef = document.getElementById('name-input');
const textOutputRef = document.getElementById('name-output');
const defaultName = 'Anonymous';


textInputRef.addEventListener('input', (event) => {
    textOutputRef = event.currentTarget.value === '' ? textOutputRef.textContent = defaultName : textOutputRef.textContent = event.currentTarget.value;
})