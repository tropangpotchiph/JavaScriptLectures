//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

//Loop through objects
const colorObj = {
  color1: 'magenta',
  color2: 'mint',
  color3: 'maroon',
  color4: 'mapula',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

//Loop through Arrays
const colorArr = ['magenta', 'mint', 'maroon', 'mapula'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
