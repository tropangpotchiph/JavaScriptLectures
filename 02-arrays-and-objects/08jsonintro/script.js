const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

//Convert to JSON string - turn an object into a json string
const str = JSON.stringify(post);

console.log(str);

const obj = JSON.parse(str);
console.log(obj);

//JSON and Arrays
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
