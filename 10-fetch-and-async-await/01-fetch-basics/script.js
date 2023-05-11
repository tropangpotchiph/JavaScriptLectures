//fetch api it returns a promise,

//################################ FETCHING A JSON FILE
// fetch('./movies.json').then((response) => {
//   console.log(response);
// });
//################################

fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//################################
//Fetch a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

//################################
//fetch from the API
fetch('https://api.github.com/users/tropangpotchiph')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));
//################################
