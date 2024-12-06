// Why don't we use var to declare variables

// Scope of Variables in JavaScript

// Global Scope

/*
let a = 10
var b = 20
const c = 30

console.log(a);
console.log(b);
console.log(c);

function logIt() {
  console.log(a);
  console.log(b);
  console.log(c);
}

logIt()
*/

// Local Scope (Functional Scope)

/*
function newLogIt() {
  let d = 40
  var e = 50
  const f = 60
  console.log('Hello From Function');
}

// console.log(d);
// ReferenceError: d is not defined
// console.log(e);
// ReferenceError: e is not defined
// console.log(f);
// ReferenceError: f is not defined
*/

// Block Scope
if (true) {
  let g = 70
  var h = 80
  const i = 90
}

// console.log(g);
// ReferenceError: g is not defined
console.log(h); // 80
// console.log(i);
// ReferenceError: i is not defined

// Note: a variable declared inside a block (not a function) has global scope

// Problem 2 with var: Variables can be redeclared if declared with var
var name = 'Shubham'

var name = 'Saurabh'

var name = 'Abhi'

// Problem 3 with var: variables can be accessed before declaration
console.log(firstName); // undefined
var firstName = 'Shubham'
// Reason: variable declared with var is part of window scope of global scope which can be accessed before declaration, whereas variables declared with let and const are part of script scope of global scope which can not be accessed before declaration


// Global vs Block Scope
let amount = 20
if (true) {
  let amount = 30
  console.log(amount);
}
console.log(amount);
