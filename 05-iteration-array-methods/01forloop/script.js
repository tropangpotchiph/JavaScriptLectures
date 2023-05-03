// for ([initialExpression]; [conditionExpression]; [incrementExpression])
// statement;

// Initial Expression - Initializes the variable / counter (i,j,k)
// Condition Expression - Condition that the loop will continue to run as long as it is met or until the condition is false
// incrementExpression - Expression that will be executed after each iteration of the loop
// Statement - Code that will be executed each time the loop is run (FOO)

// for (let i = 0; i <= 10; i++) {
//   console.log('Number ' + i);
// }

// counter            output
//   0              Number 0
//   1              Number 1
//   2              Number 2
//   3              Number 3
//   4              Number 4
//   8              number 8
//   9              Number 9
//   10             Number 10
//   11

//if it hits 7, output it is the lucky number, otherwise output the number
for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is the lucky number');
  } else {
    console.log('Number ' + i);
  }
}

//nested loops  ; (i,j)
for (let i = 0; i <= 10; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// I             J                 Output
// 0                               Number 0
//               1                 0 * 1 = 0
//               2                 0 * 2 = 0
//               3                 0 * 3 = 0
//               4                 0 * 4 = 0
//               5                 0 * 5 = 0
//               6
// 1                               Number 1
//               1                 1 * 1 = 1
//               2                 1 * 2 = 2
//               3                 1 * 3 = 3

//Loop through an array
//foreach
const names = ['Zaira', 'James', 'Jeff', 'Ces', 'Jayson', 'Ryan'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'Ces') {
    console.log(names[i] + ' is the queen');
  } else {
    console.log(names[i]);
  }
}
