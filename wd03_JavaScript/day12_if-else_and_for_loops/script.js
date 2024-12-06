// if-else

/*
let age = 20
if (age >= 18) {
  console.log('Eligible for Vote');
}
else {
  console.log('Not Eligible for Vote');
}
*/

// if else-if else

/*
age = 46
if (age < 18) {
  console.log('KID');
}
else if (age > 45) {
  console.log('OLD');
}
else {
  console.log('YOUNG');
}
*/

// Multiple Conditions: Switch

/*
let day = new Date().getDay()

switch (day) {
  case 0:
    console.log('Sunday');
    break
  case 1:
    console.log('Monday');
    break
  case 2:
    console.log('Tuesday');
    break
  case 3:
    console.log('Wednesday');
    break
  case 4:
    console.log('Thursday');
    break
  case 5:
    console.log('Friday');
    break
  case 6:
    console.log('Saturday');
    break
  default:
    console.log('Not a Valid Day!');
}
*/

// for loop in JS 

/*
for (let i = 0; i < 5; i++) {
  console.log('Hello Coder Army!');
}
*/

// Program: sum of first 10 numbers

/*
let sum = 0
for (let i = 1; i <= 10; i++) {
  sum += i
}
console.log(sum);
*/

// Nested For Loop 

// Pattern Program: 6 rows of 12345

/*
let rows = 5
for (let i = 0; i <= rows; i++) {
  let row = ''
  for (let j = 1; j <= rows; j++) {
    row += j
  }
  console.log(row);
}
*/

// Program: Staircase * pattern

/*

let rows = 5
for (let i = 1; i <= rows; i++) {
  let row = ''
  for (let j = 1; j <= i; j++) {
    row += '*'
  }
  console.log(row);
}
*/

// why don't we use var to declare variables --> refer to first.js

// while loop 

/*
let i = 1
while (i <= 5) {
  console.log(i);
  i++
}
*/

// do while loop 

/*
let j = 11
do {
  console.log(j);
  j++
} while (j <= 15);
*/

// Problem with do while loop

/*
let k = 100
do {
  console.log(k);
  k++
} while (k <= 15);
// it executes the first iteration even when condition is never satisfied
*/

// Iterating over array --> for & for of loop

/*
const arr = [10, 20, 30, 40]

// for loop --> use when index of elements is necessary for the program
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log();

// for of loop --> use when index of element is not necessary for the program
for (let el of arr) {
  console.log(el);
}
*/

// iterating over Object --> for of & for in loop
/*
const user = {
  name: 'SKG',
  age: 20,
  amount: 420,
  city: 'Zombie Land',
  state: 'Euphoria',
  country: 'Music'
}

// for of loop
const userKeys = Object.keys(user)
console.log(userKeys);

for (let key of userKeys) {
  console.log(`${key} - ${user[key]}`);
}
console.log();

// for in loop --> more concise for iterating over objects
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
*/

