// || = assigns the right side value only if the left side is a falsy values

let a = false;

if (!a) {
  a = 10;
}
a = a || 10;

console.log(a);

// && = assigns the right side value only if the left side is a truthy value

let b = 10;

if (b) {
  b = 20;
}

console.log(b);

// ?? = assigns the right side value only if the left side is null or undefined

let c = null;
if (c === null || c === undefined) {
  c = 20;
}
c ??= 20;

console.log(c);
