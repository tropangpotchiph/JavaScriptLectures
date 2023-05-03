//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//foreach - just loops through and it doesnt return anything

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

//Long form
// socials.forEach(function (item) {
//   console.log(item);
// });

//Short Form
// socials.forEach((item) => console.log(item));

//pass in the item, index and the original arr
// socials.forEach((item, index, arr) =>
//   console.log(`${index} - ${item}, ${arr}`)
// );

//Using a named function
// function logSocials(social) {
//   console.log(social);
// }
// socials.forEach(logSocials);

//Array of Objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

//To access the objects
socialObjs.forEach((item) => console.log(item));

// To access the property
socialObjs.forEach((item) => console.log(item.name));
