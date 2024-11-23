// Non Primitive Data Types
/*
// Array

let arr = [10, 20, 50, "Shubham"];
console.log(arr);
console.log(typeof arr); // object

// Object

let obj = {
  username: "Shubham",
  accountNumber: 3234363840,
  balance: 108,
};

console.log(obj);
console.log(typeof obj);

// Function
let fun = function () {
  console.log("Hello Coder Army");
  return 10;
};

let value = fun();

console.log(typeof fun); // function
console.log(value);
console.log(typeof value);
*/

// Type Conversion
/*
// String to Number
let accountBalance = "100";
let num = Number(accountBalance);

console.log(typeof accountBalance);
console.log(typeof num);

// Boolean to Number
let x = true;
console.log(Number(x));
let y = false;
console.log(Number(y));

// Spacial Cases
let accout = "100xs";
console.log(Number(accout)); // NaN

let bal = "200s";
console.log(Number(bal));

// null --> Number
let z = null;
console.log(Number(z)); // 0

// undefined --> Number
let z2 = undefined;
console.log(Number(z2)); // NaN

// Conversion to String

let ab = 20;
console.log(String(ab), typeof String(ab));

let ax = true;
console.log(String(ax)), typeof String(ax);

// Boolean

// Truthy Values
console.log(Boolean("str"));
console.log(Boolean(10));

// Falsy Values
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
*/

// Operators

// Arighmetic Operators
console.log(4 + 8);
console.log(4 - 8);
console.log(4 * 8);
console.log(4 / 8);
console.log(4 ** 8);
console.log(4 % 8);

console.log(6 * 3 + 18 / 6 - 9);
// Divide Multipy left to right
// Add Sub left to right
console.log(6 * ((3 + 18) / 6 - 9));

// ++ increment operator, -- decrement operator

let sum = 20;
// post increment
let total = sum++;
console.log(sum++, total); // 20
// post decrement
total = sum--;
console.log(sum--, total); // 21
// pre increment
total = ++sum;
console.log(++sum, total); // 21
// pre decrement
total = --sum;
console.log(--sum, total); // 20

// Assingment Operator

let x = 20;
x += 10;
console.log(x);
x -= 10;
console.log(x);
x *= 10;
console.log(x);
x /= 10;
console.log(x);
