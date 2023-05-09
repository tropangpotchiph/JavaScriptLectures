// document.querySelector('h1').textContent = 'Hello World'; //this will result on an error

//###################################
//to fix it: use On Page Load (onload)
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };
//###################################
//addeventlistener - this does the same thing as above
// window.addEventListener(
//   'load',
//   () => (document.querySelector('h1').textContent = 'Hello World')
// );

//###################################
//DOM Content Loaded
window.addEventListener('load', () => console.log('Page Loaded'));

window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run Me');

document.querySelector('h1').textContent = 'Hello World';

//###################################
//Resize event
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

//###################################
//Scroll event
window.addEventListener('scroll', () => {
  //   console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

//###################################
// Focus and Blur
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});

//###################################
//###################################
//###################################
