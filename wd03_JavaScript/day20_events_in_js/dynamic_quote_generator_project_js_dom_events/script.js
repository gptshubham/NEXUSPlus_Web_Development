// array containing 20 world famous quotes
const famousQuotes = [
  'Be the change that you wish to see in the world. – Mahatma Gandhi',
  'In the middle of every difficulty lies opportunity. – Albert Einstein',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson',
  'The only thing we have to fear is fear itself. – Franklin D. Roosevelt',
  'I think, therefore I am. – René Descartes',
  'Happiness depends upon ourselves. – Aristotle',
  'Do what you can, with what you have, where you are. – Theodore Roosevelt',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill',
  'You miss 100% of the shots you don’t take. – Wayne Gretzky',
  'The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt',
  "Life is what happens when you're busy making other plans. – John Lennon",
  'It always seems impossible until it’s done. – Nelson Mandela',
  'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha',
  'Injustice anywhere is a threat to justice everywhere. – Martin Luther King Jr.',
  'Love all, trust a few, do wrong to none. – William Shakespeare',
  'An unexamined life is not worth living. – Socrates',
  'Not everything that is faced can be changed, but nothing can be changed until it is faced. – James Baldwin',
  'To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde',
  'Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world. – Albert Einstein',
  'The journey of a thousand miles begins with one step. – Lao Tzu',
];

// selecting the p#quote element
const quote = document.querySelector('#quote');

// defining a function that generates quote dynamically
function quoteGenerator() {
  // index position of famousQuotes Array
  const index = Math.floor(Math.random() * famousQuotes.length);
  // fetching quotes from famousQuotes Array and setting as content of the p#quote element
  quote.innerHTML = famousQuotes[index];
}

// calling quoteGenerator function every 5 seconds

// array containing 100 different color hex codes

const hexColors = ['#369d15', '#e90e22', '#bbf9b6', '#071010', '#9b2fbd', '#453ec7', '#b8b596', '#2d307c', '#5e8e9f', '#61ff1c', '#ec523d', '#fc4554', '#6d84b7', '#9bade2', '#541808', '#17f375', '#4cd701', '#50aaba', '#5e01ff', '#9cd2c6', '#3178ad', '#6e6dc6', '#95194a', '#448d33', '#3bd0d4', '#e8b44d', '#284d70', '#8ed155', '#7cbd9d', '#d6a2b8', '#59312f', '#67e46f', '#97377a', '#b4de34', '#45efdc', '#9633ed', '#49b4c0', '#8815ce', '#421365', '#6f9803', '#5d9188', '#062503', '#0ce2e9', '#e9ef73', '#959563', '#62f433', '#9a3687', '#ec9a9a', '#580a44', '#9aff39', '#bfae92', '#7fc98e', '#4cfc16', '#d6153c', '#c2844c', '#2d437c', '#742b4b', '#dfbf92', '#b771c4', '#8acb5d', '#1191bb', '#da3c94', '#610845', '#ace54c', '#a94d84', '#fb8932', '#ee11c4', '#b2eef9', '#87e3b3', '#f2903e', '#bad53a', '#a17120', '#634f92', '#6d856a', '#e129ad', '#4737c1', '#567ceb', '#fb5ca6', '#b54b12', '#d5f2af', '#ed9181', '#5df8e7', '#68e61d', '#8366be', '#ff3c3e', '#d8ea83', '#8daaa1', '#59cede', '#9eeddd', '#2f3eb8', '#3e9b80', '#bfcade', '#cb3e3f', '#f33f36', '#2d9e31', '#186d95', '#66bf9f', '#16394b', '#10ac9e', '#706936',
];

const complementaryColors = ['#c962ea', '#16f1dd', '#440649', '#f8efef', '#64d042', '#bac138', '#474a69', '#d2cf83', '#a17160', '#9e00e3', '#13adc2', '#03baab', '#927b48', '#64521d', '#abe7f7', '#e80c8a', '#b328fe', '#af5545', '#a1fe00', '#632d39', '#ce8752', '#919239', '#6ae6b5', '#bb72cc', '#c42f2b', '#174bb2', '#d7b28f', '#712eaa', '#834262', '#295d47', '#a6ced0', '#981b90', '#68c885', '#4b21cb', '#ba1023', '#69cc12', '#b64b3f', '#77ea31', '#bdec9a', '#9067fc', '#a26e77', '#f9dafc', '#f31d16', '#16108c', '#6a6a9c', '#9d0bcc', '#65c978', '#136565', '#a7f5bb', '#6500c6', '#40516d', '#803671', '#b303e9', '#29eac3', '#3d7bb3', '#d2bc83', '#8bd4b4', '#20406d', '#488e3b', '#7534a2', '#ee6e44', '#25c36b', '#9ef7ba', '#531ab3', '#56b27b', '#0476cd', '#11ee3b', '#4d1106', '#781c4c', '#0d6fc1', '#452ac5', '#5e8edf', '#9cb06d', '#927a95', '#1ed652', '#b8c83e', '#a98314', '#04a359', '#4ab4ed', '#2a0d50', '#126e7e', '#a20718', '#9719e2', '#7c9941', '#00c3c1', '#27157c', '#72555e', '#a63121', '#611222', '#d0c147', '#c1647f', '#403521', '#34c1c0', '#0cc0c9', '#d261ce', '#e7926a', '#994060', '#e9c6b4', '#ef5361', '#8f96c9',
];

const triadicColors = ['#8bf26a', '#3e6377', '#104e0b', '#5c6565', '#f08412', '#9a931c', '#0d0aeb', '#8285d1', '#b3e3f4', '#b65471', '#41a792', '#519aa9', '#c2d90c', '#f00237', '#a96d5d', '#6c48ca', '#a12c56', '#a5ff0f', '#b35654', '#f1271b', '#86cd02', '#c3c21b', '#ea6e9f', '#99e288', '#902529', '#3d09a2', '#7da2c5', '#e326aa', '#d112f2', '#2bf70d', '#ae8684', '#bc39c4', '#ec8ccf', '#093389', '#9a4431', '#eb8842', '#9e0915', '#dd6a23', '#9768ba', '#c4ed58', '#b2e6dd', '#5b7a58', '#61373e', '#3e44c8', '#eaeab8', '#b74988', '#ef8bdc', '#41efef', '#ad5f99', '#ef548e', '#1403e7', '#d41ee3', '#a1516b', '#2b6a91', '#17d9a1', '#8298d1', '#c980a0', '#3414e7', '#0cc619', '#df20b2', '#66e610', '#2f91e9', '#b65d9a', '#013aa1', '#fea2d9', '#50de87', '#436619', '#07434e', '#dc3808', '#47e593', '#0f2a8f', '#f6c675', '#b8a4e7', '#c2dabf', '#367e02', '#9c8c16', '#abd140', '#50b1fb', '#0aa067', '#2a4704', '#42e6d6', '#b24d3c', '#bd3b72', '#d8bb13', '#549193', '#2d3fd8', '#e2fff6', '#ae2333', '#f34232', '#84930d', '#93f0d5', '#141f33', '#209394', '#48948b', '#82f386', '#6dc2ea', '#bb14f4', '#6b8ea0', '#6501f3', '#c5be8b',
];

function changeColor() {
  const index = Math.floor(Math.random() * hexColors.length);
  document.body.style.backgroundColor = hexColors[index];

  const container = document.querySelector('.container');
  // const index1 = Math.floor(Math.random() * complementaryColors.length);
  container.style.backgroundColor = complementaryColors[index];

  const box = document.querySelector('.quote-box');
  box.style.backgroundColor = triadicColors[index];

  const h1 = document.querySelector('h1');
  h1.style.color = hexColors[index];
}


const quote_generator_btn = document.querySelector('#generate-quote-btn');

// Mouse Events --> click, dblclick, mousemove, mouseover

// click event
quote_generator_btn.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
  quoteGenerator();
  changeColor();
})

// mousemove event
quote_generator_btn.addEventListener('mousemove', (e) => {
  // console.log(e.target);
  // console.log(e.type);
  quote_generator_btn.style = 'cursor: pointer';
})

// // mouseover event
// quote_generator_btn.addEventListener('mouseover', () => {
//   quote_generator_btn.style = 'background-color: white; color: hotpink;';
// })

// Keyboard Events --> keydown , keyup

// // keydown event --> event will be triggered when any key is pressed on the keyboard, if keep the key pressed, event will keep triggering again and again very rapidly

// document.addEventListener('keydown', () => {
//   quoteGenerator();
//   changeColor()
// })

// // keyup event --> event is triggered when key is released after being pressed
// document.addEventListener('keyup', () => {
//   quoteGenerator();
//   changeColor()
// })

// What if we want the quotes and the colors and background colors to change only when we press a specific key: 'enter' for example ==> we can do that with the help of event object

// e.key property
document.addEventListener('keydown', (e) => {
  // console.log(e.key);
  // console.log(e.target);
  // console.log(e.type);
  if (e.key === 'Enter') {
    quoteGenerator();
    changeColor();
  }
})

