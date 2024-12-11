// for of loop

/*
const arr = [10, 20, 11, 18, 13];
for (let el of arr) {
  console.log(el);
}

const str = 'John Wick';
for (let el of str) {
  console.log(el);
}
*/

// don't use for of with objects

/*
const obj = {
  2: 3,
  1: 5,
  name: 'SKG',
  age: 22,
  gender: 'Male',
};
for (let el of obj) {
  console.log(el);
}
// TypeError: obj is not iterable


// console.log(obj);

// how to access keys and values of object using for of Loop
// Not Recommended

// values --> Object.values()
for (let el of Object.values(obj)) {
  console.log(el);
}
// keys --> Object.keys()
for (let key of Object.keys(obj)) {
  console.log(key);
}
*/

// forEach() Array Method

/*
const arr = [10, 20, 30, 40, 50];
// single argument
arr.forEach((num) => console.log(num + 5));

// double arguments
arr.forEach((num, index) => console.log(index, num + 5));

// triple arguments
arr.forEach((num, index, array) => (array[index] = num * 2));
// modifies the original array
// map is a better alternative if we don't want to modify the original array

console.log(arr);
*/

// filter() Array Method

/*
const arr1 = [10, 22, 33, 41, 50];

// filtering even numbers out of arr1 and storing in a separate array
const filteredArray = arr1.filter((num) => num % 2 === 0);
console.log(filteredArray);
// like forEach , filter also supports 3 Optional Arguments

// UseCase: filtering out students with marks > 50
const students = [
  { name: 'Rohan', age: 22, marks: 70 },
  { name: 'Mohan', age: 24, marks: 80 },
  { name: 'Darshan', age: 28, marks: 30 },
  { name: 'Mohit', age: 32, marks: 40 },
  { name: 'Saurabh', age: 12, marks: 90 },
];
const filteredStudents = students.filter((obj) => obj.marks > 50);
console.log(filteredStudents);

// alternatively, we can destructure the Objects
const filteredStudents1 = students.filter(({ marks }) => marks > 50);
console.log(filteredStudents1);
*/

// map() Array Method

/*
const arr = [1, 2, 4, 5];

// square the values and store in an array without modifying the original array
const squaredArray = arr.map((num) => num ** 2);
console.log(squaredArray);

// Chaining Array Methods

// square of even numbers

const result = arr.filter((num) => num % 2 === 0).map((num) => num ** 2);
console.log(result);

// half of squared even numbers

const output = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 2)
  .map((num) => num / 2);
console.log(output);
*/

// reduce() Array Method

const arr = [7, 14, 21, 28, 35];

// total sum of values of arr
const total = arr.reduce((accumulator, current) => accumulator + current);
console.table(total);

// product of values of arr
const product = arr.reduce((accumulator, current) => accumulator * current);
console.log(product);

// Chaining Array Methods

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // expected output: 800

// total of cubed even values of arr1
const result = arr1
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 3)
  .reduce((acc, curr) => acc + curr);
console.log(result);
