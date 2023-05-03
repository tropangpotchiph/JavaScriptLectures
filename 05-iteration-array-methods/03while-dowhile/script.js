let i = 0;

// while (i <= 10) {
//   console.log('Number ' + i);
//   i++;
// }

//Loop thru arrays
// const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

//Nesting while loops
while (i <= 5) {
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
