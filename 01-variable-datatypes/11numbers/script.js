let x;

const num = new Number(12.7453);

//toString() - returns a string representation of a number
x = num.toString();

//to get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

//toPrecision()- returns a number with the specified length
x = num.toPrecision(3);

// toExponential() - convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

//toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString("en-US");

//valueOf - Get value
x = num.valueOf();

console.log(x);
