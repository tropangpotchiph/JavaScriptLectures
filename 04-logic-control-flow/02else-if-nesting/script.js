const d = new Date(2022, 2, 3, 13, 30, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good night!');
}

// Nested if
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good night!');
  if (hour >= 20) {
    console.log('ZzzzzZZzzz');
  }
}

//If using AND Operator
if (hour >= 8 && hour < 17) {
  console.log('It is work time!');
}

//If using OR operator
if (hour === 6 || hour === 20) {
  console.log('Brush your teeth');
}
