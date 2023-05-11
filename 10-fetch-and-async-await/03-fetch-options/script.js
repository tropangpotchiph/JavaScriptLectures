/*
method: HTTP method that we want to use
body: data you want to send
headers: Any HTTP headers 
*/

//###########################
//original
// function createPost(post) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//        method: "POST",
//        body: JSON.stringify ({
//         title: post.title,
//         body: post.body
//        })
//     });
// }

//#########################################
//refactor using destructuring,

// function createPost({title, body}) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//        method: "POST",
//        body: JSON.stringify ({
//         title, body,
//        })
//     });
// }

//#########################################
//continuing the code
function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123', //fake token
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data)); //return of the promise
}

//running it
createPost({ title: 'My post', body: 'This is my Post' });
