// Comparison Operator
/*
// Number to Number
let a1 = 1;
let a2 = 2;

console.log(a1 == a2);
console.log(a1 > a2);
console.log(a1 < a2);
console.log(a1 >= a2);
console.log(a1 <= a2);
// Type coercion
let num = 10;
let str = "10";
console.log(num == str);

str = "30";
console.log(num < str);

str = "30x";
console.log(num < str);

str = "30.33";
console.log(num < str);

// ===
num = 100;
str = "100";
console.log(num === str);

// Tricky Scenario
let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1 == abc2 == abc3);
*/

// General Rules of Comparison
/*
// null == undefined ==> true
// null === undefined ==> false

console.log(null == undefined);
console.log(null === undefined);

console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);

// undefined comparisons
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

// NaN comparison
console.log(NaN == NaN);

let str3 = "shubh";
let str4 = "abhi";
console.log(Number(str3) == Number(str4));

str4 = "shubh";
console.log(Number(str3) == Number(str4));
*/

// Logical Operators
/*
let age = 18;
let money = 420;

console.log(age >= 1 && money > 200);
console.log(age <= 1 && money > 200);

console.log(age <= 1 || money > 200);
console.log(age >= 1 || money > 200);

console.log(!(age > 10));
*/

// Bitwise Operator
/*
// & --> Bitwise And
console.log(4 & 5);

console.log(11 & 14);

// | --> Bitwise Or
console.log(11 | 14);

// ^ --> Bitwise XOR (exclusive or)
console.log(11 ^ 14);

// << --> Bitwise Left Shift
console.log(11 << 14); // 11 * (2**14)
console.log(5 << 2); // 5 * (2**2)
console.log(5 << 3); // 5 * (2**3)

// >> --> Bitwise Right Shift
console.log(11 >> 14);
console.log(5 >> 2);
console.log(5 >> 3);
console.log(20 >> 2);
*/
