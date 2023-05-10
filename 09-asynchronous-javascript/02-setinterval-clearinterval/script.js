//This will continue to output in the console the Date.now
// const intervalID = setInterval(myCallback, 1000);

// function myCallback() {
//   console.log(Date.now());
// }

//####################################
// //This will make the Stop button stop the Date.now
// const intervalID = setInterval(myCallback, 1000);

// function myCallback() {
//     console.log(Date.now());
// }

// function stopChange() {
//     clearInterval(intervalID);
// }

// document.getElementById('stop').addEventListener('click', stopChange);

//####################################
//passing an argument
// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// document.getElementById('stop').addEventListener('click', stopChange);

//####################################
//background will change into black and white when the start color change is clicked

// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeColor, 1000);
//   }
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// //black and white color
// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// document.getElementById('start').addEventListener('click', startChange);
// document.getElementById('stop').addEventListener('click', stopChange);

//####################################
//random color
let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalID);
}

//randomColor
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  document.body.style.backgroundColor = `#${randomColor}`;
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
