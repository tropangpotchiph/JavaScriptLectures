// Define a function
function sayHEllo() {
  console.log('Hello World');
}

//Invoke, execute or call a function
sayHEllo();

// Define a function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}
// console.log(num1 + num2); //this will give an error, were going to talk about scope later

//Invoke the function with arguments
add(5, 10);

//Parameters vs. Arguments
//Parameters are the names of the variables that are used to pass data into a function
//Arguments are the actual values that are passed into the function

//return a value - declare a function, use parameters, return
function subtract(num1, num2) {
  console.log('Before the return');
  return num1 - num2;
  console.log('After the return');
}

const result = subtract(10, 2);
console.log(result);
console.log(result, subtract(20, 5));
