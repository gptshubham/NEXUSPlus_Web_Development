// Shortcomings of JavaScript
let balance = 200;

console.log(balance * 10);

balance = 'Two Hundred'; // Dynamic Typing

console.log(balance * 10);
// NaN to user (in the website) , no intimation to the developer

let age = 20;

age = 'Twenty';

console.log(age);
// Twenty not 20 => expecting a number getting a string instead, output: NaN, no error

const obj = {
  name: 'Shubham',
  age: 17,
};

const userHeight = obj.height;
console.log(userHeight); // Non Existing Values => undefined, no error
// undefined to user instead of error to developer

// Debugging is a pain point
