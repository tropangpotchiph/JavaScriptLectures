let output;

// output = document.all;
// output = document.all[11];
// output = document.all.length;

//everything in the html tags
output = document.documentElement;

//head and body tags
output = document.head;
output = document.body;

//HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

//Random properties
output = document.doctype;
output = document.domain; //deprecated
output = document.URL;
output = document.characterSet;

//Get all forms
output = document.forms; //HTML Collection of forms
output = document.forms[0];

//getting the specific attributes
output = document.forms[0].id; //getting the id
output = document.forms[0].method; //get
output = document.forms[0].action;

document.forms[0].id = 'new-id';

//get all links
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = 'https://facebook.com';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList; //DOM Token List

//for image
output = document.images; //HTML Collection
output = document.images[0];
output = document.images[0].src;

//HTML Collection is an array like, but its just like,
//this will produce an error
// document.forms.forEach((form) => console.log(form));

//To fix this, turn the HTML Collection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
