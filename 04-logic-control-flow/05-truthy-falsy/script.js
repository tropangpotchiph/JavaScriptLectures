//coerced to true
const email = 'test@email.com';

if (email) {
  console.log('You passed in an email');
}
console.log(Boolean(email));

//Falsy Values:
// - false
// - 0
// - "" or '' (Empty String)
// - null
// -undefined
// -NaN

//Truthy Values
// - true
// - '0' () in a string
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () (empty function)

//  ##########################################################
//  ### Remember the falsy values, if not false, then true ###
//  ##########################################################

const x = false;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

const children = 3;

if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

//Solution
if (!isNaN(children)) {
  // if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

//checking for empty arrays
const posts = [];
//Blog Posts
if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts to List');
}

if (posts.length > 0) {
  console.log('Lists Post');
} else {
  console.log('No Posts To List');
}
