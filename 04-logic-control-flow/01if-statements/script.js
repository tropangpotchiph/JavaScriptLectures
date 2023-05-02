//If Statement Syntax
if (true) {
  console.log('This is True');
}

if (false) {
  console.log('This is Not True'); //will not run because the expression is false
}

//Evaluation expressions
const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

//Block scope
if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}
// console.log(`${z} is 20`); // This will result to an ERROR

// Shorthand if/else
if (x >= y)
  console.log(`${x} is greater than or equal to ${y}`),
    console.log('This is true');
else console.log('This is false');
