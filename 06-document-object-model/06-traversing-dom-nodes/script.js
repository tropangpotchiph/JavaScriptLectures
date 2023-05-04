let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

//changing the innertext of child 1
output = parent.childNodes[3].innerText = 'Child One';

//changing the color of child 2
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

//Get parent node
const child = document.querySelector('.child');

//To get the parent node
output = child.parentNode;
output = child.parentElement;

//styling
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Get sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
