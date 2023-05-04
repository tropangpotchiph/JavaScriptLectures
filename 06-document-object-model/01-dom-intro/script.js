//Global Window Object
// console.log(window);

//the document object is now part of the window object
// console.dir(window.document);

//accessing DOM Elements directly with properties
// console.log(document.body);
// console.log(document.links[0]);

//alternatives // getElementByID
// console.log(document.body.innerHTML);

//setting the properties of elements
// document.body.innerHTML = '<h1> Hello from body</h1>';

//another method that is available at your disposal
//JS has a ton of methods
// document.write('Hello From JS');

//methods to select elements more directly
console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main</h1>';
document.querySelector('#main h1').innerText = 'Hi';
