// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//reduce your array into a single value

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2);

//using a for of loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum3());

//Shopping
const cart = [
  { id: 1, name: 'Soy Sauce', price: 80 },
  { id: 2, name: 'Vinegar', price: 60 },
  { id: 1, name: 'Pork', price: 380 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log(total);
console.log('Please cook Pork Adobo, buy coke/soda');
