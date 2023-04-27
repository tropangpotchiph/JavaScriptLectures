// Ways to declare variable
// var, let & const

let firstName = "Juan";
const lastName = "Cruz";
console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// Only letters, numbers, underscores and dollar signs
// Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// we cannot reassign value to const
// x = 200;
console.log(x);

const arr = [1, 2, 3, 4];
console.log(arr);
// arr = [1, 2, 3, 4, 5];
// we can manipulate arrays and objects using const
arr.push(5);
console.log(arr);

const person = {
  name: "Ryan",
};
person.name = "Alden";
person.email = "ryan@gmail.com";
console.log(person);

//Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
console.log(a);
console.log(d);
console.log(e);
