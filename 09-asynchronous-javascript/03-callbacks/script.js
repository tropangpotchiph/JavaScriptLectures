// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

//#####################################
// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' },
// ];

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong> ${post.title} </strong> ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }
// getPosts();

//#####################################
//create a function to create a new post
// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' },
// ];

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong> ${post.title} </strong> ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }
// createPost({ title: 'Post Three', body: 'This is post three' });
// getPosts();
//this will not output post3, because create post took a little longer (2000) as compared to getpost(1000)
//#####################################
//to fix the above problem, use callback --> NO MAGIC
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong> ${post.title} </strong> ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

//#####################################
