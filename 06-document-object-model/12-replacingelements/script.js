//replaceWith() Method

function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child'); //bring in the item that you want to replace

  const li = document.createElement('li'); //create our new element
  li.textContent = 'Mansanas'; //set the new text

  firstItem.replaceWith(li);
}

//OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)'); //selects the second child

  secondItem.outerHTML = '<li>Tang Litro Pack</li>';
}

//replace all
//############### replace all using outerHTML
// function replaceAllItems() {
//   const lis = document.querySelectorAll('li');

//   lis.forEach((item) => {
//     item.outerHTML = '<li>Halamanan ko! </li>';
//   });
// }

//#############replace all using innerHTML
// function replaceAllItems() {
//   const lis = document.querySelectorAll('li');

//   lis.forEach((item) => {
//     item.innerHTML = 'Halamanan ko!';
//   });
// }

//###### condition
// function replaceAllItems() {
//   const lis = document.querySelectorAll('li');

//   lis.forEach((item, index) => {
//     if (index === 1) {
//       item.innerHTML = 'Hasyenda ni Archie';
//     } else {
//       item.innerHTML = 'Halamanan Ko';
//     }
//   });
// }

//Short Version using ternary
function replaceAllItems() {
  const lis = document.querySelectorAll('li');
  lis.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1 ? '<li>Hasyenda ni Archie</li>' : '<li>Halamanan Ko</li>')
  );
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
