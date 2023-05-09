const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

//################# Better safe than sorry
// function run() {
//   console.log(1);
// }

//##########################################
function run() {
  //className - get a string of all classes
  //   console.log(itemList.className);
  //###########
  //changing the classes with className //overwrite
  //   text.className = 'card dark';
  //###########
  //DOM Token List
  //   console.log(itemList.classList);

  itemList.classList.forEach((c) => console.log(c));

  //   text.classList.add('dark');
  //   text.classList.remove('card');
  //   text.classList.toggle('dark');
  //   text.classList.toggle('hidden');
  //   text.classList.replace('card', 'dark');

  //Changer Style - style property
  //   itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
