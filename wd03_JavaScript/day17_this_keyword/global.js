// globalobject
console.log('Hello, world!');
console.log(Math.random());
// setInterval();
// new Object();
// new String('SKG');

// Chrome Browser: window
// Nodejs: global

console.log(global);
console.dir(global);

console.log(global.Math.random());

// globalThis --> points to globalobject irrespective of env.
console.log(globalThis);
console.log(globalThis.Math.random());
