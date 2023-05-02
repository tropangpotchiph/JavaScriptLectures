const d = new Date(2022, 3, 3, 1, 30, 0);
const month = d.getMonth(); //getting the month
const hour = d.getHours(); //getting the hours
// console.log(month);

//Immediate value evaluation
switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or March');
}

//range evaluation
switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;

  default:
    console.log('Good Evening');
}
