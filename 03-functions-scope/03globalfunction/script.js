//Global Scope Variable
const x = 100;

console.log(x, 'in global');

function run() {
  //Access global vars in function
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

//access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  //overwrite global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}
// console.log(y); //you cannot access y
//you cannot access variables outside of the scope

add();
