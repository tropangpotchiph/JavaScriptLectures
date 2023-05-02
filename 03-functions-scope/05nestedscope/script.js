//first - parent; second is the child

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  //   console.log(y);// this will give an error because the parent cannot access the child
  second();
}
first();
// second();

if (true) {
  //parent
  const x = 100;
  if (x === 100) {
    //child
    const y = 200;
    console.log(x + y);
  }
  //   console.log(y); // error because they have different scope
}
