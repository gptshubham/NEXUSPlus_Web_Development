// Hoisting in JS (*Conceptually)
// all variable and function declarations are moved to the top
let x;
// const y;
// // SyntaxError: Missing initializer in const declaration
var z = undefined;

// initializations while execution

console.log(x); // undefined
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// console.log(z); // ReferenceError: Cannot access 'y' before initialization
x = 10;
y = 20;
z = 30;
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30
