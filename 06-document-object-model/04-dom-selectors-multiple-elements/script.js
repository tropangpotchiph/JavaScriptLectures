// querySelectorAll() - returns a nodelist

const listItems = document.querySelectorAll('.item');
console.log(listItems); //this will give us a node list, array like structures.
//in the node list, we can use the high array methods

//access elements by index
// console.log(listItems[1]);
// console.log(listItems[1].innerText);

//set a color for a specific element
// listItems[1].style.color = 'red';

//converting them all to red
// listItems.forEach((item) => {
//   item.style.color = 'red';
// });

//remove index =1
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }
// });

//further experiment, changing the first element to orange
//problem arises because there is no x mark
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerText = 'Oranges';
//   }
// });

//fixing the issue above
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = ` Oranges <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

//other methods
//getElementsByClassName() - HTML collection

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);
console.log(listItems2[2].innerText);

//using Array.from to utilize foreach in HTML Collection
const listItemsArray = Array.from(listItems2);

//using forEach in a HTML Collection
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// getElementsByTagName()
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);
console.log(listItems3[0]);
console.log(listItems3[0].innerText);
