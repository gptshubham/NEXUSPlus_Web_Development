// Selecting Elements
const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// Event Bubbling and Capturing

// Adding Event Listeners
grandparent.addEventListener(
  'click',
  (e) => {
    // console.log(`${e.target.id} Clicked`);
    console.log(`${grandparent.id} Clicked`);
  }
  // true
);

parent.addEventListener(
  'click',
  (e) => {
    console.log(`${parent.id} Clicked`);
    e.stopPropagation();
  }
  // true
);

child.addEventListener(
  'click',
  (e) => {
    console.log(`${child.id} Clicked`);
    e.stopPropagation();
  }
  // true
);
