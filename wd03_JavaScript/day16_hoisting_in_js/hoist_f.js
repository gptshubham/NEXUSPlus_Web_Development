greet(); // Hello from Named Function!
function greet() {
  console.log('Hello from Named Function!');
}

// toGreet();
// // ReferenceError: Cannot access 'toGreet' before initialization --> (TDZ)
let toGreet = function () {
  console.log('Hello from Anonymous Function!');
};

// greeting();
// // ReferenceError: Cannot access 'greeting' before initialization --> (TDZ)
let greeting = () => console.log('Hello from Arrow Function!');

// toGreet1();
// // TypeError: toGreet1 is not a function
// why?
// Reason: value assigned to a var variable is undefined, so practically we are invoking undefined() which is causing the TypeError
var toGreet1 = function () {
  console.log('Hello from Anonymous Function!');
};

// greeting1();
// // TypeError: greeting1 is not a function
// why? --> same reason as toGreet1
var greeting1 = () => console.log('Hello from Arrow Function!');
