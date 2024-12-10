'use strict';

// for in loop
let obj = {
  name: 'Shubham',
  age: 20,
  gender: 'Male',
  city: 'Ghost Land',
};
/*
// // Accessing Keys
// for (let key in obj) {
//   console.log(key);
// }

// // Accessing Values
// for (let key in obj) {
//   console.log(obj[key]);
// }

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

console.log(Object.keys(obj));
*/

const obj2 = Object.create(obj);
obj2.amount = 420;
obj2.id = 'SKG';

console.log(obj2);
console.log(obj2.name); // inherited property

console.log(Object.keys(obj2)); // [ 'amount', 'id' ]
// Object.keys() does not have access of inherited properties

for (let key in obj2) {
  console.log(key);
}
// for in loop has access of inherited inherited properties also
