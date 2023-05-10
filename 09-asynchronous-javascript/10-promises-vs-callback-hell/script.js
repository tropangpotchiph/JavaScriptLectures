//original callback
// function getData(endpoint, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', endpoint);
//   xhr.onreadystatechange = function () {
//     if ((this.readyState === 4) & (this.status === 200)) {
//       cb(JSON.parse(this.responseText));
//     }
//   };
//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }
// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//       console.log(data);
//     });
//   });
// });

//refactored to promise chaining, convert into promise, use promise chaining (.then)
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Soemthing went wrong');
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

//now its time to use the promise
//to get the movies
// getData('./movies.json').then((movies) => {
//   console.log(movies);
// });

//but wait, we are going to chain
//get movies and actors
// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//   });

//but wait theres even more
//movies, actors and directors
// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   });
//and for the grand finals -- catch()
getData('./movies.json')
  .then((movies) => {
    console.log(movies);
    return getData('./actors.json');
  })
  .then((actors) => {
    console.log(actors);
    return getData('./directors.json');
  })
  .then((directors) => {
    console.log(directors);
  })
  .catch((error) => console.log(error));
