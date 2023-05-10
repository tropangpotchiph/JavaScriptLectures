// const xhr = new XMLHttpRequest();
// xhr.open('Get', './movies.json');

// //ready State has 5 possible values
// // 0 - request not initiated
// // 1 - server connection established
// // 2 - request received
// // 3 -processing request
// // 4 -request finished and response is ready

// xhr.onreadystatechange = function () {
//   console.log(this.status);
// };

//Send a request
// xhr.send();

//##########################
// const xhr = new XMLHttpRequest();

// xhr.open('Get', './movies.json');
// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(JSON.parse(this.responseText));
//     }
// };

// xhr.send();
//##########################
//this is displaying the movies.json
// const xhr = new XMLHttpRequest();

// xhr.open('Get', './movies.json');
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     data.forEach((movie) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong> ${movie.title} </strong> - ${movie.year}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };

// xhr.send();
//##########################
//github api
const xhr = new XMLHttpRequest();

xhr.open('Get', 'https://api.github.com/users/tropangpotchiph/repos');
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      const li = document.createElement('li');
      //repo name ; repo description
      li.innerHTML = `<strong> ${repo.name} </strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
