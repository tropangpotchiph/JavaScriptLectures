const logo = document.querySelector('img');
const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log('double click event');

//applying background color if double click
// const onDoubleClick = () => {
//   document.body.style.backgroundColor = 'pink';
// };

//toggle the color
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'pink') {
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseOver = () => console.log('mouse over event');
const onMouseWheel = () => console.log('mouse wheel event');
const onDragStart = () => console.log('drag start event');
const onDragEnd = () => console.log('drag end event');
const onDrag = () => console.log('drag event');

//Event Listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// //norightclick event
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragend', onDragEnd);
logo.addEventListener('drag', onDrag);
