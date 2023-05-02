// const user = 'Alden'; //Error because this one had been declared on the other js file

//to handle this iffe
//IFFE Syntax (Has its own scope and runs right away)

(function () {
  const user = 'Ryan';
  console.log(user);

  const hello = () => console.log('Hello from the IFFE');
  hello();
})();

//Params
(function (name) {
  console.log('Hello ' + name);
})('Cat');

//Named IIFE (can only be called recursively)
(function hello() {
  console.log('Hello');
  //this is recursion dont do this  in this particular
  // hello();
});
