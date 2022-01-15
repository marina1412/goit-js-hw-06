const sizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

//text.style.fontSize = '100px';

sizeControl.addEventListener('input', function (event) {
    text.style.fontSize = event.currentTarget.value + 'px';
            
    })