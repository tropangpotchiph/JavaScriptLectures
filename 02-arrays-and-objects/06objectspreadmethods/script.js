let x;

//Create an object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

//Object nesting
const person = {
  address: {
    coords: {
      lat: 32.4232,
      lng: -71.3232,
    },
  },
};

//accessing the latitude
x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//Spread operator
// const obj3 = { obj1, obj2 };
const obj3 = { ...obj1, ...obj2 };

// const obj4 = Object.assign({}, obj1, obj2);

// Array of Objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pick up kids from school' },
  { id: 3, name: 'Drink Coffee' },
];

x = todos;

//Get array of object keys
x = Object.keys(todo);

//Get length of an object
x = todo.length;
x = Object.keys(todo).length;

//Get array of object values
x = Object.values(todo);

// key/value pairs
x = Object.entries(todo);

console.log(x);
// console.log(obj4);
