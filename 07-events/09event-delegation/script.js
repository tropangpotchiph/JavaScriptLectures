//powerful event handling pattern

//#######################################
//Add an event listener on all items
// const listItems = document.querySelectorAll('li');

// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     console.log(e.target);
//   });
// });
//#######################################

// const listItems = document.querySelectorAll('li');

// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });
//doing the above code is not efficient

//#######################################
//doing it efficiently by way of targeting the parent
// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Add a single event listener on the parent (Event Delegation)
// list.addEventListener('click', (e) => {
//   console.log(e.target);
// });

//#######################################
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
//#######################################
// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// list.addEventListener('mouseover', (e) => {
//   if (e.target.tagName === 'LI') {
//     e.target.style.color = 'red';
//   }
// });

//#######################################
//#######################################
