// Timer Mini Project

const timer = document.getElementsByClassName('root');
// console.log(timer);
timer[0].innerHTML = 'Hello Coder Army';

// alternatively: we can do the same using getElementById()

// console.log(timer[0]);

timer[0].id = 'root';

root.innerHTML = 'Indian Time';
// console.log(root);

// what the heck is this, I did not even create a root variable
// Note: root is not explicitly declared as a variable; it's being inferred directly
// as the ID of the element. This is possible because, in browsers, IDs
// automatically create global variables pointing to their respective elements
// (though this behavior is not recommended for production code).

const timerById = document.getElementById('root');
// console.log(timerById);

//
function displayTime() {
  const timer = document.getElementById('root');
  const now = new Date();
  const timeIndian = now.toLocaleTimeString();
  timer.innerHTML = timeIndian;
}
setInterval(displayTime, 1000);

// styling the layout
timerById.style =
  'height: 100vh;display: flex; justify-content: center;align-items: center; font-weight: bold; font-size: 5rem;';

// to remove the scroll bar from our layout we have to set margin of body element to zero
document.body.style.margin = '0';
