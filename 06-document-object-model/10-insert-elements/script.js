//InsertAdjacentElement

function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'InsertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1); //position, element that you want to insert
}

//InsertAdjacentText
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'InsertAdjacentText');
}

//InsertAdjacentHTML
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>InsertAdjacentHTML</h2>');
}

//insertBefore
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'InsertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();
