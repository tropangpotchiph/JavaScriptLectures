//remove - is called on the element you want to remove
//remove child - called on the parent element and pass the item you want to remove

function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}
removeClearButton();

//#######################################
//removeChild() Method
// function removeFirstItem() {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector('li:first-child');

//   ul.removeChild(li);
// }
// removeFirstItem();

//#######################################
//remove orange juice
// function removeItem(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector(`li:nth-child(${itemNumber})`);

//   ul.removeChild(li);
// }

// removeItem(3);
// removeItem(2);

//#######################################
// function removeItem2(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelectorAll('li')[itemNumber - 1];

//   ul.removeChild(li);
// }

// // removeItem2(1); //apple
// removeItem2(3); //oreos
//#######################################
// function removeItem3(itemNumber) {
//   const li = document.querySelectorAll('li');
//   li[itemNumber - 1].remove();
// }
// // removeItem3(1); //apples
// removeItem3(4); //milk
//#######################################
const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeItem4(2); //orange
