// A promise is an objectthat represents the completion or failure of an asynchronous operation

//when the task is complete, the promise either fulfilled or rejected.

//############################################
//create a promise
// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 3000);
// });

// //To handle the promise
// promise.then(() => {
//   console.log('Promise consumed');
// });
// console.log('Hello from global scope');

//############################################

// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// });

// //To handle the promise
// promise.then(() => {
//   console.log('Promise consumed');
// });

// //.then was placed in the promise
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Async task 2 complete');
//     resolve();
//   }, 1000);
// }).then(() => console.log('Promise 2 consumed'));

// console.log('Hello from global scope');
//############################################
//return data from a promise
// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// });

// //To handle the promise
// promise.then(() => {
//   console.log('Promise consumed');
// });

// //.then was placed in the promise
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'Ryan', age: 40 });
//   }, 1000);
// }).then((user) => console.log(user));

// console.log('Hello from global scope');
//############################################
// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// });

// //To handle the promise
// promise.then(() => {
//   console.log('Promise consumed');
// });

// //.then was placed in the promise
// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'Ryan', age: 40 });
//   }, 1000);
// });

// getUser.then((user) => console.log(user));

// console.log('Hello from global scope');
//############################################
//what if theres an error
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise consumed');
// });

//.then was placed in the promise
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'Ryan', age: 40 });
    } else {
      reject('Error: something went wrong');
    }
  }, 1000);
});

// getUser.then((user) => console.log(user));
getUser.then((user) => console.log(user)).catch((error) => console.log(error));
// getUser
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');
//############################################
//############################################
