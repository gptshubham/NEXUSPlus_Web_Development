// Selecting Elements

/*
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const orange = document.querySelector('#orange');
const purple = document.querySelector('#purple');
const body = document.body;
*/

const bgColors = {
  red: 'linear-gradient(to right, #ff0000, #8b0000)',
  blue: 'linear-gradient(to right, #1e3c72, #2a5298)',
  green: 'linear-gradient(to right, #56ab2f, #a8e063)',
  orange: 'linear-gradient(to right, #ffa500, #ff4500)',
  purple: 'linear-gradient(to right, #7f00ff, #e100ff)',
  black: 'linear-gradient(to right, #000000, #434343)',
};

/*
red.addEventListener('click', (e) => {
  body.style.background = bgColors[e.currentTarget.id];
});

blue.addEventListener('click', (e) => {
  body.style.background = bgColors[e.currentTarget.id];
});

green.addEventListener('click', (e) => {
  body.style.background = bgColors[e.currentTarget.id];
});

orange.addEventListener('click', (e) => {
  body.style.background = bgColors[e.currentTarget.id];
});

purple.addEventListener('click', (e) => {
  body.style.background = bgColors[e.currentTarget.id];
});
*/

// Alternatively: we can do the same using forEach()

/*
const buttons = document.querySelectorAll('button');
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    body.style.background = bgColors[button.id];
  });
});
*/

// Problem with the above two alternatives: too many event listeners
// Solution: one Event Listener on #root

const root = document.querySelector('#root');

root.addEventListener('click', (e) => {
  // console.log(e.target.tagName);

  if (e.target.tagName === 'BUTTON') {
    document.body.style.background = bgColors[e.target.id];
  }

  console.log('Event Triggered!');
});
