const clearBtn = document.querySelector('#clear');

// function onClear() {
//   alert('Clear Items from function');
// }

//###########################################
//clearing them all the fastest way
// function onClear() {
//   const itemList = document.querySelector('ul');
//   itemList.innerHTML = '';
// }
//###########################################
function onClear() {
  const itemList = document.querySelector('ul');
  const items = document.querySelectorAll('li');

  //foreach
  //   items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

//JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Itemsss');
// };

//disadvantage is, using multiple events
// clearBtn.onclick = function () {
//   console.log('Clear Itemsss');
// };

//addEventListener()
// clearBtn.addEventListener('click', function () {
//   alert('Clear Items');
// });

//arrow function to shorten
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

//named function
clearBtn.addEventListener('click', onClear);

//removeEventListener()
// setTimeout(() => clearBtn.click(), 5000);
//after 5 seconds, the event listener is now removed
//it will not work anymore
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
