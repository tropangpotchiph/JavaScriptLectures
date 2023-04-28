let x;

// Creating an object
const person = {
  name: 'Maria Clara',
  age: 30,
  isAdmin: true,
  address: {
    street: '143 Paghanapin St.',
    city: 'Cavite',
    province: 'Dasmarinas',
  },
  hobbies: ['music', 'sports'],
};

//Accessing object properties
x = person.name; //Dot notation
x = person['age']; //Bracket Notation
x = person.address.city;
x = person.address.province;
x = person.hobbies[0];

//Updating properties
person.name = 'Padre Damaso';
person['isAdmin'] = false;

//Deleting Properties
delete person.age;

//Create new properties
person.hasChildren = true;

//Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person; //Dot notation

//Keys with multiple words
const person2 = {
  'first name': 'Ryan',
  lastName: 'Azur',
};

x = person2['first name'];

console.log(x);
