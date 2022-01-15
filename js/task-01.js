const itemRef = document.querySelectorAll('.item');
console.log('Number of categorees:', itemRef.length);
itemRef.forEach(category => { 
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.children[1].children.length);
})

