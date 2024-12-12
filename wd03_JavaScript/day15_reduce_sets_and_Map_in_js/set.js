const arr = [10, 20, 30, 10, 15, 10];
// console.log(arr);

const set1 = new Set(arr);
// console.log(set1);
// console.log(typeof set1); // object

// set methods in js

/*
// add()
const set2 = new Set();
set2.add(4);
set2.add(6);
set2.add('skg');
set2.add(true);
set2.add(33.33);

console.log(set2);

// delete()
set2.delete(6);
set2.delete(true);
console.log(set2);

// has()
const userId = new Set([
  'rohit_negi9',
  'mohi_91',
  'ravi.91',
  'chhavi_90',
  'sumit._90',
]);
let newUser = 'rohit_negi9';
console.log(userId.has(newUser));
newUser = 'Shubham_9211';
console.log(userId.has(newUser));

// clear()
userId.clear();
console.log(userId);

// Program: Extracting Unique Elements out of an array using set
let arr1 = [10, 20, 10, 30, 20, 10, 40, 50];
// Converting array into set to remove duplicates
const set3 = new Set(arr1);
// converting set back to array
arr1 = [...set1];

console.log(arr1);
*/

// Set Operations
const set4 = new Set([10, 20, 30, 50, 40]);
const set5 = new Set([10, 80, 70, 40]);

// Set Union using Spread Operator
let set45 = new Set([...set4, ...set5]);
console.log(set45);

// Set Intersection
let setIntersection = new Set([...set4].filter((num) => set5.has(num)));
console.log(setIntersection);

// Set Difference
let setDifference = [...set4].filter((num) => !set5.has(num));
console.log(setDifference);

// Iteration over set

// using for of loop
for (let el of set4) {
  console.log(el);
}

// using forEach()
set4.forEach((num) => console.log(num));
