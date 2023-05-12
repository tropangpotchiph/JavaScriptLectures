//using the .then and getting the data
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'Ryan', age: 40 });
//   }, 1000);
// });
// promise.then((data) => console.log(data));
//############################################################
//implementing using async await
//async await has to be in a function

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'Ryan', age: 40 });
//   }, 1000);
// });

// async function getPromise() {
//   const response = await promise;
//   console.log(response);
// }

// getPromise();

//############################################################
//implement using fetch api

// async function getUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   console.log(data);
// }

//implementing this using .then
// function getUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// getUsers();

//############################################################

//implementing https://jsonplaceholder.typicode.com/posts using arrow function with aconst getUser
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  console.log(data);
};
getPosts();

//############################################################

//############################################################
