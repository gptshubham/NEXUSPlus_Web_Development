'use strict';
/* Function (also known as "Named Function") */

/*
function greet(name) {
  console.log(`Hello ${name}!`);
}

greet('Coder Army!');
greet('JavaScript!');
greet('Elon Musk');
*/

// Program: function to add two numbers

/*
// Function Declaration: Parameter (variable names that refer to the arguments passed)
function sum(num1, num2) {
  return num1 + num2;
}

// Function Call: Argument
let result = sum(2, 3);
console.log(result);
*/

// Program: Multiplication Function

/*
function product(num1, num2) {
  return num1 * num2;
}

result = product(2, 3);
console.log(result);
*/

/* Anonymous Function */

/*
const greet = function (name) {
  console.log(`Hello ${name}!`);
};

greet('Coder Army');
greet('JavaScript');
greet('Elon Musk');
*/

/* Arrow Function */

/*
const greeting = (name) => console.log(`Hello ${name}!`);

greeting('Coder Army');
greeting('JavaScript');
greeting('Elon Musk');

// Arrow Function --> Implicit Return

const sum = (num1, num2) => num1 + num2;

let result = sum(2, 3);
console.log(result);

// Arrow Function --> Explicit Return

const add = (num1, num2) => {
  return num1 + num2;
};

result = add(4, 6);
console.log(result);
*/

// Named Function vs Anonymous Function vs Arrow Function

/*
// cube function (named)

function cube(num) {
  return num ** 3;
}
console.log(cube(2));

// cubeOf function (anonymous)

const cubeOf = function (num) {
  return num ** 3;
};

console.log(cubeOf(3));

// toCube function (arrow)

const toCube = (num) => num ** 3;
// we can even remove the brackets () in case of single param
// however, Prettier doesn't allow that to maintain consistency throughout the code

console.log(toCube(5));
*/

// function : having unlimited parameters

/*
const sum = function (...numbers) {
  console.log(numbers);
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

let result = sum(2, 3, 4);
console.log(result);

result = sum(2, 3);
console.log(result);

result = sum(2, 3, 4, 5);
console.log(result);

result = sum(2);
console.log(result);

result = sum(2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
*/

// Object as Argument of function

/*
let obj = {
  name: 'Shubham',
  age: 20,
  amount: 120,
};

function fun(object) {
  console.log(object.name, object.amount);
}

fun(obj);

// destructuring object passed as argument

let obj1 = {
  name: 'SKG',
  age: 20,
  amount: 420,
};

function funny({ name: user, amount: payment }) {
  console.log(user, payment);
}

funny(obj1);
*/

// HW : pass by value vs pass by reference
/*
// pass by value
let a = 15;
let b = a;
console.log(a, b);

b = 30;
console.log(a, b);

// pass by reference
const arr1 = [20, 30, 40];
const arr2 = arr1;

console.log(arr1, arr2);

arr2[0] = 77;
console.log(arr1, arr2);
*/

// Question: is the object passed on as argument to a function a pass-by-value of pass-by-reference

/*
let obj2 = {
  name: 'SKG',
  age: 20,
  amount: 420,
};
console.log(obj2);
// { name: 'SKG', age: 20, amount: 420 }
function passBy(object) {
  object.name = 'Shubham';
  return object;
}

const obj3 = passBy(obj2);
console.log(obj3);
// { name: 'Shubham', age: 20, amount: 420 }
console.log(obj2);
// { name: 'Shubham', age: 20, amount: 420 }

// Conclusion: Pass by Reference, as modifications made in one are reflected by the other
*/
