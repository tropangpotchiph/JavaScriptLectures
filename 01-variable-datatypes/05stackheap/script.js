// Value stored in the stack
const name = "John";
let age = 30;

//reference is stored in the heap
const person = {
  name: "Benj",
  age: 42,
};

let newName = name;
newName = "Jonathan";

let newPerson = person;
newPerson.name = "Benjamin";

console.log(name, newName);
console.log(person, newPerson);
