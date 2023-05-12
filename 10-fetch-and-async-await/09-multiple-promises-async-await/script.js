//original using .then
// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);
//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Error: Something went wrong');
//         }
//       }
//     };
//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }
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
//   })
//   .catch((error) => console.log(error));
//##############################
//implementing the code above using promise.all with async await
// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);
//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Error: Something went wrong');
//         }
//       }
//     };
//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// async function getAllData() {
//   const movies = await getData('./movies.json');
//   const actors = await getData('./actors.json');
//   const directors = await getData('./directors.json');
//   console.log(movies, actors, directors);
// }

// async function getAllDataPromiseAll() {
//   const [movieRes, actorsRes, directorsRes] = await Promise.all([
//     fetch('./movies.json'),
//     fetch('./actors.json'),
//     fetch('./directors.json'),
//   ]);

//   const movies = await movieRes.json();
//   const actors = await actorsRes.json();
//   const directors = await directorsRes.json();

//   console.log(movies, actors, directors);
// }

// // getAllData();
// getAllDataPromiseAll();

//##############################
//another approach
async function getAllDataPromiseAll2() {
  const [movieRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);

  // const movies = await movieRes.json();
  // const actors = await actorsRes.json();
  // const directors = await directorsRes.json();

  console.log(movieRes, actorsRes, directorsRes);
}
getAllDataPromiseAll2();
//##############################
//##############################
//##############################
//##############################
//##############################
