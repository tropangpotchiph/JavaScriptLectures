//Introduced in ES6

//Normal Function declaration
// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

//rewriting it as an arrow function
//arrow function syntax
const add = (a, b) => {
  return a + b;
};
// console.log(add(1, 2));

//Implicit Return
const subtract = (a, b) => a - b;

// console.log(subtract(1, 2));

const double = (a) => a * 2;

//Return an object
const createObj = () => ({
  name: 'Ryan',
});

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (n) {
//   console.log(n);
// });

//Arrow function in a callback
numbers.forEach((n) => console.log(n));
console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
