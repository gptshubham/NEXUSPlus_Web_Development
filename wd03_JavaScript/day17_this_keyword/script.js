// 'use strict';
// 1. in Global Context (Outside of any Function) this points to window object
// in Browser: window

/*
console.log('John Wick');
const b = 20;
console.log(window);
console.log(this);
console.log(this === window);

var c = 30;
console.log(this.c);

function greet() {
  console.log('Hello Coder Army!');
}

console.log(this.greet);
*/

// in Nodejs: Module's exports object
// console.log(this);

// Inside a Function
// i. non-strict mode --> points to global object

/*
function greet() {
  console.log(this);
}

greet();
*/

// ii. strict mode --> undefined

/*
function greet() {
  console.log(this);
}

greet();
// undefined
// window.greet(); // --> points to global object in the Dev Tools Console
// ReferenceError: window is not defined
*/

// 3. this Inside a Method --> points to the object

/*
const obj = {
  name: 'skg',
  age: 20,
  greet() {
    console.log(this);
    console.log(this.name);
    console.log(this.age);
  },
  toGreet: () => {
    console.log(this);
  },
  greeting() {
    let arrowInsideNamed = () => console.log(this);

    arrowInsideNamed();
  },
};

// function defined inside an Object --> this points to the object
obj.greet();

// 4. Arrow Function --> do not have their own this
// --> instead they inherit from their lexical scope
obj.toGreet(); // --> points to global object in the Chrome Dev Tools console

obj.greeting(); // --> points to the obj as greeting's this refers to obj and arrowInsideNamed inherits from it.
*/

// 5. this inside a Constructor or a Class --> this refers to the instance of the Object being created
// basically it works as a reference variable for the instance of the object that is being created inside the class.

/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(this.name);
    console.log(this.age);
  }
}

let a = new Person('SKG', 20);
console.log(a);

a.greet();
*/

// this inside an Anonymous Function --> refers to the global object

/*
const greet = function () {
  console.log('Hello from Anonymous Function!');
  console.log(this);
};

greet();
*/
