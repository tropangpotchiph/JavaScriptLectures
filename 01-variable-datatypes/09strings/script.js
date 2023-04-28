let x;

const name = "Ryan";
const age = 19;

//concatenation
x = "Hello, my name is " + name + " and I am " + age + " years old ";

//Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

//Creating a "string object"
const s = new String("Hello World");
x = typeof s;

//length of the string
x = s.length;

//access value by key
x = s[6];

//Shows the prototype of the string objects. Shows the properties and methods
x = s.__proto__;

//Change case
x = s.toUpperCase();
x = s.toLowerCase();

// charAt - returns the character at the specified index
x = s.charAt(0);

//returns the index of the first occurence
x = s.indexOf("d");

// substring - search a string for a specified value
x = s.substring(2, 4);
x = s.substring(7);

// slice() - extracts a part of a string and returns a new string
x = s.slice(1, 7);
x = s.slice(-11);
x = s.slice(-11, -6);

//trim() - remves whitespace from beginning until the end of string
x = "                     Hello World";
x = x.trim();

//replace() - replace all instances of a string
// x = s.replace("World", "Ryan");

//includes() - returns true if the string is found
x = s.includes("Wo");

//calueOf() - returns the primitive value of a variable
x = s.valueOf();

x = s.split("");

console.log(x);
