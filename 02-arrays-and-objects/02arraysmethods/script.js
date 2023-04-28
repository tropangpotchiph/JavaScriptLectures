let x;

const arr = [26, 38, 44, 29, 109, 73, 41];

//push() - Push a value to the end of the array
arr.push(100);

//pop() taking the last value off
arr.pop();

//unshift() Add a value to the beginning of the array
arr.unshift(99);

//shift() Removes the first value
arr.shift();

// reverse() - Reverses an array
// arr.reverse();

// includes() - Check to see if something is in the array
x = arr.includes(44);

// indexOf() - Return the index of the first match
x = arr.indexOf(29);

// Return array as a string
x = arr.toString();
x = arr.join();

//slice() returns selected elements in an array as a new array
x = arr.slice(1, 5);

// splice() works like slice() except it takes the first index of the element and the number of elements after that. It also mutates the original array
console.log(arr);
// x = arr.splice(3, 1);

//chaining methods - some methods can be chained depending on the return value
x = arr.slice(1, 4).reverse().toString().charAt(1);

console.log(x);
console.log(arr);
