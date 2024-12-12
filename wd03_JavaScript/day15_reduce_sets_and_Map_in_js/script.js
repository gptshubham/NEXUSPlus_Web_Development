'use script';

// Reduce Array Method

const arr = [10, 20, 30, 40, 50];

// arr.reduce(callback function, initialization) // initialization is optional

let result = arr.reduce((acc, curr) => acc + curr); // no initialization works just fine
// console.log(result);

result = arr.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
});
console.log(result);

result = arr.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0);

console.log(result);

const fruitsArray = ['orange', 'apple', 'mango', 'banana', 'orange', 'apple'];

const fruitsObject = fruitsArray.reduce((acc, curr) => {
  if (acc.hasOwnProperty(curr)) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(fruitsObject);
