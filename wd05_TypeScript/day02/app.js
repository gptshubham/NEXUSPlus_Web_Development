"use strict";
let num = 10;
let x = 20;
// tsc automatically determines the type of the variable x by the value assigned to it ==> Type Inference
// x = 'twenty';
let value = 'twenty'; // type inference => string
// value = 20;
// error TS2322: Type 'number' is not assignable to type 'string'.
let money; // type inference => any
money = 20;
money = 'twenty';
console.log(money.toUpperCase());
// in case of any, ts also behaves like js, that's exactly what we don't want
let value2; // avoid
value2 = 30;
value2 = 'thirty';
// console.log(value2.toUpperCase());
// error TS18046: 'value2' is of type 'unknown'.
if (typeof value2 === 'string') {
    console.log(value2.toLocaleUpperCase());
}
if (typeof value2 === 'number') {
    console.log(value2.toFixed(2));
}
// Non Primitive Data Types
// array
let arr = [2, 4, 6, 5, 7, 11];
let arr2 = [2, 1, 1, 9, 10];
// let arr2: number[]
let arr3 = ['two', 1, 'nine', 10];
// let arr3: (string | number)[]
let arr4 = ['ten', 10, 'nine', 3];
// arr3.push(true);
// arr4.unshift(false);
console.log(arr3);
console.log(arr4);
let arr5 = [10, 'eleven', true];
// tuples
let tuple1 = ['ten', 11];
let tuple2 = ['ten', 11, 12];
// Objects
// type inference
const obj1 = {
    name: 'Shubham',
    age: 120,
    gender: 'male',
};
// Explicit Type Annotation (inline)
const obj2 = {
    name: 'Shubham',
    age: 120,
    gender: 'male',
};
let person;
person = {
    name: 'shubham',
    age: 120,
    balance: 420,
};
let c1 = {
    name: 'shubham',
    age: 20,
    id: 'skg123',
};
let Obj3 = {
    name: 'shubham',
    age: 20,
    position: 'SDE1',
    id: 123321,
};
