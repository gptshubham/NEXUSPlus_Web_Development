"use strict";
const num = 10;
const obj = {
    name: 'Shubham',
    age: 20,
    gender: 'male',
    // uid: 1234
};
// Partial<>
const obj2 = {
    // using Partial<> to make all the properties optional
    name: 'Shubham',
    balance: 210,
};
// Required<>
const obj3 = {
    // using Required<> to make all the properties compulsory
    name: 'Shubham',
    age: 20,
    balance: 210,
};
// Readonly<>
const obj4 = {
    // using Readonly<> to make an object properties read only
    name: 'shubham',
    age: 20,
    balance: 210,
};
const arr = [
    { name: 'shubham', age: 18 },
    { name: 'saurabh', age: 20 },
    { salary: 120000, id: '122321' },
];
// Function in TS
function greet(name) {
    console.log(name);
    return `Hello, ${name}!`;
}
console.log(greet('Shubham'));
function meet(name, value) {
    console.log(`Hello, I'm ${name} and I have RS.${value} in my Account.`);
}
meet('Shubham', 120);
// Default Parameter
function neet(msg = 'skg') {
    console.log(msg);
}
neet();
neet('shubham');
// Optional Parameter
function GATE(person) {
    console.log(person || 'Rohit Negi');
}
GATE('skg');
GATE();
// Arrow Function
const sumOfTwo = (a, b) => a + b;
const result = sumOfTwo(3, 2);
console.log(result);
// callback function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
// calling placeOrder function with callback
placeOrder(10, (amt) => console.log(amt));
// Rest Parameter
function total(...rest) {
    let sum_total = 0;
    rest.forEach((val) => (sum_total += val));
    console.log(sum_total);
}
total(2, 3, 1, 4, 123, 1, 12, 10);
const teacher1 = {
    name: 'Rohit',
    age: 20,
    salary: 120,
    id: 'RN123',
};
