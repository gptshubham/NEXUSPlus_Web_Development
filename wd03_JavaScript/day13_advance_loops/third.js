// for in loop is not used with array --> Reason
const arr = [10, 20, 40, 12, 30];
arr.name = 'Shubham';
arr.age = 20;
for (let key in arr) {
  console.log(key, arr[key]);
}
// Blunder: Index of an array can never be a string
// for in simply accesses array in the similar way as it does with Object
