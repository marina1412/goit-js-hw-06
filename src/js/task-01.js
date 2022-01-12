let numberOfCategories = 0;
const listWithId = document.querySelector('#categories');
const countCategory = listWithId.querySelectorAll('.item');
console.log('Number of categorees:', countCategory.length);
countCategory.forEach(category => { 
    console.log('Category:', category.firstElementChild.textContent);
    const elements = category.getElementsByTagName('li');
    console.log('Elements:', elements.length);
})

