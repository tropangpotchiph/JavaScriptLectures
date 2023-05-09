const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

//############################
// function onInput(e) {
//   console.log('Input');
// }
// // itemInput.addEventListener('keydown', onInput);
// itemInput.addEventListener('input', onInput); //replacing keydown with input
//############################
// function onInput(e) {
//   console.log(e.key);
// }
// // itemInput.addEventListener('keydown', onInput);
// itemInput.addEventListener('keypress', onInput); //replacing keydown with input
//############################
// function onInput(e) {
//   heading.textContent = e.target.value;
// }
// // itemInput.addEventListener('keydown', onInput);
// itemInput.addEventListener('input', onInput); //replacing keydown with input

//############################
// function onInput(e) {
//   heading.textContent = e.target.value;
// }
// itemInput.addEventListener('input', onInput);

//############################ PRIORITY INPUT
// function onInput(e) {
//   heading.textContent = e.target.value;
// }
// priorityInput.addEventListener('input', onInput);

//############################ Recurring item (checkbox)
function onChecked(e) {
  //   console.log(e.target.checked);
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not checked';
}
checkbox.addEventListener('input', onChecked);

//############################
function onFocus() {
  //   console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}

function onBlur() {
  //   console.log('Input is not focused');

  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

//############################
//############################
//############################
//############################
