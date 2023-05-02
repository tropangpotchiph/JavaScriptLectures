const x = 100;
var foo = 1;
var bar = 2;

//An if statement is a block
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}
// console.log(y); //reference error: y is not defined

//A loop is a block
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i); //reference error: i is not defined

//Using var
if (true) {
  const a = 500;
  let b = c;
  var c = 700;
}

console.log(c); //a and b is error but c is good

//Var is function scoped
function run() {
  var d = 100;
  console.log(d);
}
// console.log(d); //this will give an error because you cannot access var outside of a scope
run();
