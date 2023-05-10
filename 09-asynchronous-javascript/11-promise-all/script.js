function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

//for testing purposes only
// const moviesPromise = getData('./movies.json');
// moviesPromise.then((m) => console.log(m));

//##########################################
// const moviesPromise = getData('./movies.json');
// const actorsPromise = getData('./actors.json');
// const directorsPromise = getData('./directors.json');

// //Takes the promises
// Promise.all([moviesPromise, actorsPromise, directorsPromise]).then((data) => {
//   console.log(data);
// });
//##########################################
//.catch
// const moviesPromise = getData('./movies.json');
// const actorsPromise = getData('./actors.json');
// const directorsPromise = getData('./directors.json');

// //Takes the promises
// Promise.all([moviesPromise, actorsPromise, directorsPromise])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

//#################### What if there is a new promise?
const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

const dreiPromise = new Promise((resolve, reject) => {
  resolve('Hello World');
});

//Takes the promises
Promise.all([moviesPromise, actorsPromise, directorsPromise, dreiPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
