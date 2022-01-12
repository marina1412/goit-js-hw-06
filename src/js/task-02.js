const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');

const makeListIngredients = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.textContent = option;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const elements = makeListIngredients(ingredients);
list.append(...elements);