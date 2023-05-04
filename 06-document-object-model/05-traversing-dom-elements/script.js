let output;

const parent = document.querySelector('.parent');
//Get child elements from a parent
output = parent.children; //this is a property, no need for ()
output = parent.children[1]; //child 2
output = parent.children[1].innerText; //child 2
output = parent.children[1].className; //child
output = parent.children[1].nodeName; //div

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//get sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';
console.log(output);
