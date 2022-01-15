const textInputRef = document.getElementById('name-input');
const textOutputRef = document.getElementById('name-output');
const defaultName = 'Anonymous';

textInputRef.addEventListener('input', (event) => { 
textOutputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        textOutputRef.textContent = defaultName;
    }
})