'use strict';

// getOwnPropertyDescriptor()

/*
const obj = {};

// console.log(obj);

obj.name = 'Shubham';
// console.log(obj);

// key value writable, enumerable and configurable
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// writable: true
// means that we can change the value, if it's false then the same is not allowed
obj.name = 'Mohit';
// console.log(obj);
// enumerable: true

// configurable: true
// means that we can change the value of writable and enumerable
*/

// defineProperty()

/*
let obj1 = {};
Object.defineProperty(obj1, 'name', {
  value: 'Shubham',
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(obj1); // { name: 'Shubham' }
obj.name = 'Mohit';
console.log(obj1); // { name: 'Shubham' }
// since writable is set to false, it does not allow the change the value of name property

// // let's try to set writable to true
// Object.defineProperty(obj1, 'name', {
//   writable: true,
// });
// // TypeError: Cannot redefine property: name
*/

// Bank Example

/*
const customer = {
  name: 'Shubham',
  age: 50,
  account_number: 30001,
};

// customer.account_number = 50001;
console.log(customer.account_number); // 50001
// we can see that it is a problem, however we can set writable to false and restrict the change of account_number and name property of the customer

Object.defineProperty(customer, 'account_number', {
  writable: false,
});

// customer.account_number = 77777;
// // TypeError: Cannot assign to read only property 'account_number' of object

Object.defineProperty(customer, 'name', {
  writable: false,
});

// customer.name = 'John Wick';
// // TypeError: Cannot assign to read only property 'name' of object

// now let's make writable unchangeable
Object.defineProperty(customer, 'account_number', {
  configurable: false,
});

Object.defineProperty(customer, 'name', {
  configurable: false,
});

// console.log(Object.getOwnPropertyDescriptor(customer, 'account_number'));
// console.log(Object.getOwnPropertyDescriptor(customer, 'name'));
*/

// enumerable
const customer = {
  name: 'Shubham',
  age: 50,
  account_number: 30001,
  balance: 1000,
};
// for (let key in customer) {
//   console.log(key);
// }
Object.defineProperty(customer, 'name', {
  enumerable: false,
});
for (let key in customer) {
  console.log(key);
}
// now name property is not accessible even by for in loop

console.log(Object.keys(customer));

const customer2 = Object.create(customer);
customer2.city = 'Mumbai';
customer2.state = 'Maharashtra';

for (let key in customer2) {
  console.log(key);
}
// now name is an inherited property for customer2 and since it's enumerate is set to false, it can not be accessed.

// Note: for in loop can not access keys of Object.prototype ==> just guess the reason now.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));

// we can customize the enumerable property of toString()
Object.defineProperty(Object.prototype, 'toString', {
  enumerable: true,
});
for (let key in customer) {
  console.log(key);
}
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
