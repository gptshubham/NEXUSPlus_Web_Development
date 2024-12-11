// Callback Function

/*
function names(fun) {
  console.log(`Hello, I am names.`);
  fun();
}

// A Named Function as callback
function greetNamed() {
  console.log('I am named function as callback function.');
}

names(greetNamed);

names(function greetNamed() {
  console.log('I am named function as callback function.');
});

// An Anonymous Function as callback
const greetAnonymous = function () {
  console.log('I am anonymous function as callback function.');
};
names(greetAnonymous);

names(function () {
  console.log('I am anonymous function as callback function.');
});

// An Arrow Function as callback function
const greetArrow = () =>
  console.log('I am arrow function as callback function.');

names(greetArrow);

names(() => console.log('I am arrow function as callback function.'));
*/

// setInterval()

function fetchData() {
  // various codes
  console.log('I am fetching data.');
}

setInterval(fetchData, 5000);
