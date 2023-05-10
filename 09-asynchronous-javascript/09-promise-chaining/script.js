const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: 'Ryan', age: 40 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});
promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.log(error));
