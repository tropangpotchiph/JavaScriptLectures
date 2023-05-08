const logo = document.querySelector('img');

// logo.addEventListener('click', function (e) {
//   console.log(e);
// });

//#########################################
// function onClick(e) {
//   //   console.log(e);
//   //   console.log(e.target);
//   console.log(e.currentTarget);
//   e.target.style.backgroundColor = 'black';
// }

// logo.addEventListener('click', onClick);
//#########################################
//type
// function onClick(e) {
//   console.log(e.type);
// }
// logo.addEventListener('click', onClick);
//#########################################
//timestamp
function onClick(e) {
  //   console.log(e.timeStamp);
  //clientX and Y
  //   console.log(e.clientX);
  //   console.log(e.clientY);
  //offset
  //   console.log(e.offsetX);
  //   console.log(e.offsetY);
  //page x and Y
  //   console.log(e.pageX);
  //   console.log(e.pageY);
  //screenx and y
  //   console.log(e.screenX);
  //   console.log(e.screenY);
}
// logo.addEventListener('click', onClick);
//#########################################
document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Link was clicked');
});

function onDrag(e) {
  document.querySelector('h1').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
