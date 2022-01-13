const textInput = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', (event) => { 
    if (event.currentTarget.value !== '') {
        textOutput.textContent = event.currentTarget.value;
    } else {
        textOutput.textContent = 'Anonymous';
    }
})