const sizeControlRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

textRef.style.fontSize = sizeControlRef.value + 'px';

sizeControlRef.addEventListener('input', (event) => {
    textRef.style.fontSize = event.currentTarget.value + 'px';
            
    })