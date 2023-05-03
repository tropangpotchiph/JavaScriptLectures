// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// Number x
const numberLabel = numbers.map((number) => 'Number ' + number);
// console.log(numberLabel);

//DoubledNumbers using foreach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});
// console.log(doubledNumbers2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//Create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

//create an array with company name and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
// console.log(companyInfo);

//create an array of objects with the name and length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});
// console.log(companyYears);

//chain map methods
// sqrt and double
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

//long version
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  });

console.log(squareAndDouble2);

const squareAndDouble3 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

console.log(squareAndDouble3);

//getting the even number and then doubling it
// const evenDouble = numbers.filter((number) => number % 2 === 0);
// console.log(evenDouble);
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);
