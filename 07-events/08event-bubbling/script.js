//###########################################
//alert when button was clicked
// const button = document.querySelector('form button');
// button.addEventListener('click', () => {
//   alert('Button was clicked');
// });
//###########################################
//bringing in the parent which is the div
// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2');

// button.addEventListener('click', () => {
//   alert('Button was clicked');
// });

// div.addEventListener('click', () => {
//   alert('Div was clicked');
// });
//###########################################
// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2');
// const form = document.querySelector('form');

// button.addEventListener('click', () => {
//   alert('Button was clicked');
// });

// form.addEventListener('click', () => {
//   alert('Form was clicked');
// });
// div.addEventListener('click', () => {
//   alert('Div was clicked');
// });

//###########################################
const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked');
});

//###########################################
//###########################################
