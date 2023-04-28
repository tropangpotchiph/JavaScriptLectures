let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'mango'];

//Nesting Arrays - array within an array

//Nesting berries inside of fruits

// fruits.push(berries);

//to access blueberry
// x = fruits[3][1];

//create a new variable and nest both arrays
// const allFruits = [fruits, berries];
// console.log(allFruits);
// x = allFruits[1][2];

//concat() - concatenate arrays
// x = fruits.concat(berries);

//spread operator (...)  concatenate with
x = [...fruits, ...berries];

// flat() - flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

//Static methods of Array Objects
x = Array.isArray(fruits);

// from() - create an array from an array like value
x = Array.from('birthday');

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
