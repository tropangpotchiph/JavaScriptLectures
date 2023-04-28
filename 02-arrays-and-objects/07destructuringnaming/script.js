//Setting object properties with the same name as variable

const firstName = 'Maria';
const lastName = 'Clara';
const age = 25;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//Destructuring object properties
const todo = {
  id: 1,
  title: 'Drink Coffee',
  user: {
    name: 'Maria',
  },
};

// const id = todo.id;
// const title = todo.title;
// console.log(id, title);

//destructuring
// const { id, title, user } = todo;
// console.log(user);

const {
  id: todoID, //rename id to todoID
  title,
  user: { name },
} = todo;

//Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

// const [first, second] = numbers;
// console.log(first, second);

const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// console.log(todoID);
