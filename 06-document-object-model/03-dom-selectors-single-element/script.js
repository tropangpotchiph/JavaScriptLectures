// document.getElementById()

//Get the attributes
// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));

//Set the attributes
document.getElementById('app-title').title = 'new-id';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

//Get/change content

console.log(title);
console.log(title.textContent); //Shopping List
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

//change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//Use any CSS selector - querySelector
//document.querySelector()
console.log(document.querySelector('h1'));
//by id
console.log(document.querySelector('#app-title'));
//by class
console.log(document.querySelector('.container'));
//by attributes
console.log(document.querySelector('input[type="text"'));
//by pseudo selector
console.log(document.querySelector('li:nth-child(2)').innerText);

const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
