// Note: JS is a single threaded synchronous programming language

// JS behavior: Async

// console.log('10');

// setTimeout(() => {
//   console.log('15');
// }, 2000);

// console.log('20');

// console.log('30');

// single threaded : one task is executed at a time

console.log('10');

const timer = Date.now();

while (Date.now() - timer < 2000) {
  // wait for 2 seconds
}

console.log('15');

console.log('30');
