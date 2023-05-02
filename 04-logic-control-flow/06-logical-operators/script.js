//&& - AND Operator All values must be true to output a true
console.log(10 < 20 && 30 > 15 && 40 > 30); //This will give a true value

//|| - OR - If one value is true, the output is True
console.log(30 < 20 || 30 > 15 || 20 > 30); //This will give a true value

// && - will return first falsy value or the last value
let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;
console.log(a);

// const posts = [];
// console.log([posts[0]]);

const posts = ['Post One', 'Post Two']; //const posts = [];
posts.length > 0 && console.log(posts[0]);

//  || - Will return the first truthy value or the last value
let b;
b = 10 || 20; //10
b = 0 || 20; //20
b = 0 || null || '' || undefined; //undefined
console.log(b);

// ?? - Returns the right side operand when the left is null or undefined
let c;

c = 10 ?? 20; //10
c = null ?? 20; //20
c = undefined ?? 30; //30
c = 0 ?? 30; //0
c = '' ?? 30; //blank

console.log(c);
