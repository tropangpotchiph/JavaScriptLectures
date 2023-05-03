//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

//loop through arrays
const items = ['book', 'table', 'chair', 'glass'];
const users = [{ name: 'Ryan' }, { name: 'Alden' }, { name: 'Catrice' }];

//old ways to do it
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

//Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set('name', 'Ryan');
map.set('age', 19);

for (const [key, value] of map) {
  console.log(key, value);
}
