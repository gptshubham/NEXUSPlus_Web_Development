'use restrict';

// Objects in JS Part 1

// How to create object
/*
const obj = {
  name: 'Shubham',
  accountBalance: 420,
  gender: 'Male',
  age: 20,
  account_number: 12121212,
  // 'account number' also allowed --> can only be accessed using squared bracket
  0: 20,
  1: 50,
  2: 70,
  undefined: 30,
  null: 'Mohan',
};

console.log(obj);
console.log(typeof obj);

// Accessing values stored in an Object using dot notation
console.log(obj.name);
console.log(obj.gender);
console.log(obj.age);

// Accessing values stored in an Object using bracket notation
console.log(obj['accountBalance']);
console.log(obj['account_number']);
console.log(obj['0']);
console.log(obj[1]);

// undefined as key of an object
console.log(obj.undefined);
console.log(obj['undefined']);
// null as a key of an object
console.log(obj.null);
console.log(obj['null']);

// // Array is an Object
// const arr = [20, 50, 70]
// console.log(arr[0], obj[0])
// console.log(arr[1], obj[1])
// console.log(arr[2], obj[2])

// Object creation using new Object() --> not so popular
const person = new Object();
console.log(person);

// Property Addition in an Object
person.name = 'Shubham';
person.age = 120;
person.gender = 'Male';

console.log(person);

// Property Deletion in an Object
delete person.age;
console.log(person);

// Property Modification in an Object
person.name = 'skg';
console.log(person);

// Object creation using class --> when we have to create multiple objects with same keys
// Rarely used
class newPerson {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

let person1 = new newPerson('Shubham', 20, 'Male');
let person2 = new newPerson('Mohit', 21, 'Male');
let person3 = new newPerson('Saurabh', 19, 'Male');
console.log(person1);
console.log(person1, person2);

// Common Object Methods

const obj2 = {
  name: 'Shubham',
  age: 20,
  account_balance: 420,
  gender: 'Male',
};

// Object.keys(obj)
let keys = Object.keys(obj2);
console.log(keys);

// Object.values(obj)
let values = Object.values(obj2);
console.log(values);

// Object.entries(obj)
let entries = Object.entries(obj2);
console.log(entries);

// Object.assign
const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };
const obj5 = { e: 5, f: 6 };
// const obj5 = Object.assign(obj3, obj4) // modifies the obj3 as well
const obj6 = Object.assign({}, obj3, obj4, obj5); // does not modify obj3
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);

// Spread Operator
const obj7 = { ...obj3, ...obj4, ...obj5 };
console.log(obj7);

*/

// Objects in JS Part 2

/*
let obj10 = {
  a: 1,
  b: 2,
};

let obj11 = obj10;
console.log(obj11);

obj11.a = 10;
console.log(obj10, obj11);

console.log(obj10 === obj11);
// Both objects are referring to the same memory address

// Deep Copy --> structuredClone()

let obj12 = structuredClone(obj10);

obj12.a = 19;

console.log(obj10, obj12);
console.log(obj10 === obj12);
// Both are referring to different memory locations
// change in one will not be reflected by the other

// Shallow Copy --> Object.assign()

// Nested Object
const user1 = {
  name: 'Shubham',
  bankBalance: 420,
  address: {
    address_line_1: 'Zombie Street',
    zip_code: 921108,
    state: 'Euphoria',
    country: 'Music',
  },
};
console.log(user1.address.zip_code);

const user2 = Object.assign({}, user1);
console.log(user2);

user2.address.zip_code = 801192;

console.log(user2.address);
console.log(user1.address);
console.log(user1.address === user2.address);
// Both the inner (nested) objects are referring to the same memory address

user2.name = 'Suarabh';

console.log(user1.name, user2.name);
// Both the outer objects refer to different memory locations
// Note: same is the case when we create a copy using Spread Operator and concat()
// Generally Used: Object.assign()
// Recommended: structuredClone(), if deep copy is required.

// Destructuring Objects

const obj = {
  name: 'Shubham',
  bankBalance: 10000,
  age: 20,
  gender: 'Male',
  uid: '2828272726262525',
};

// const { name, bankBalance } = obj;
// console.log(name, bankBalance);

// const { name, bankBalance, age } = obj;
// console.log(name, bankBalance, age);

const { name: fullName, bankBalance: amount, age: ageYears } = obj;
console.log(fullName, amount, ageYears);

// using rest operator
const { name: firstName, age, ...obj1 } = obj;
console.log(firstName, age);
console.log(obj1);

// Destructuring Array
const arr = [12, 15, 17, 21, 19, 13];
// using rest operator
const [a, b, ...arr1] = arr;
console.log(a, b, arr1);
// lets say we only need first second and fifth element
const [first, second, , , fifth] = arr;
console.log(first, second, fifth);

// Destructuring Nested Objects
const nestedObject = {
  name: 'Shubham',
  age: 20,
  subjects: ['Computer Networks', 'Mathematics', 'Statistics', 'Python'],
  address: {
    address_line_1: 'Zombie Street',
    zip_code: 921108,
    city: 'Ghosty',
    state: 'Euphoria',
    country: 'Music',
  },
};

const { name: username, age: ageYrs } = nestedObject;
console.log(username, ageYrs);

// destructuring zip_code, city and state out of nestedObject
const { address } = nestedObject;
console.log(address);
// this is how we do it
const {
  address: { zip_code, city, state },
} = nestedObject;
console.log(zip_code, city, state);

// Destructuring subjects out of nestedObject

const {
  subjects: [, secondPaper, thirdPaper],
} = nestedObject;

console.log(secondPaper, thirdPaper);

// function as value of object
let user = {
  name: 'Shubham',
  amount: 420,
  greet: function () {
    console.log('Hello Coder Army!');
  },
  toPay: function () {
    return 990;
  },
};

user.greet();
console.log(user.greet());

console.log(toPay());
*/

// Prototype Chaining

let obj = {
  name: 'Shubham',
  amount: 420,
  greet() {
    return 10;
  },
};

console.log(obj.name);
console.log(obj.amount);
console.log(obj.greet());

console.log(obj.toString());

// arr is an object
let arr = [10, 20, 30, 40];

arr.push(10);
console.log(arr);
