function registerUser(user) {
  return user + ' is registered';
}
// console.log(user); //this will produce an error. Because it is outside of the scope
console.log(registerUser('Ryan'));

//Default Params
//Old Way
function registerUser(user) {
  if (!user) {
    user = 'Bot';
  }
  return user + ' is registered';
}
console.log(registerUser());

//ES6 Default parameter
function registerUser(user = 'Bot') {
  return user + ' is registered';
}
console.log(registerUser());

//Rest params

// function sum1(...numbers) {
//   return numbers;
// }
// console.log(sum1(1, 2, 3, 4, 5, 6)); //output array

function sum1(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum1(1, 2, 3, 4, 5, 6, 100));

//Objects as Params
//we wil not always get primitive values, more often, you are going to get objects

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Alden',
};

console.log(loginUser(user));
console.log(loginUser({ id: 2, name: 'Catcat' }));

//Arrays as params
//get a random number from an array
function getrandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getrandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
