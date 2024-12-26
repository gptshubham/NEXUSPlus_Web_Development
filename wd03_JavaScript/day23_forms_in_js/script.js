// Form Events

const form = document.querySelector('form');
// const firstName = document.querySelector('#first-name');

// // click event
// form.addEventListener('click', (e) => console.log(e.target.value));

// // input event
// form.addEventListener('input', (e) => console.log(e.target.value));

// // change event
// form.addEventListener('change', (e) => console.log(e.target.value));

// // focus event
// form.addEventListener('focus', (e) => console.log(e.target.value));
// // doesn't bubble ==> needs to be created on an specific element
// firstName.addEventListener('focus', (e) => console.log(e.target.value));

// // focusin event
// // however if we don't want to add a separate event listener for a specific child element, then we can use focusin
// form.addEventListener('focusin', (e) => console.log(e.target.value));

// // blur event
// form.addEventListener('blur', (e) => console.log(e.target.value));
// // doesn't bubble ==> needs to be created on an specific element

// firstName.addEventListener('blur', (e) => console.log(e.target.value));

// // alternatively: we can use focusout to make it bubble
// form.addEventListener('focusout', (e) => console.log(e.target.value));

// // submit event
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('form submitted');
// });

// // reset event
// form.addEventListener('reset', (e) => {
//   e.preventDefault();
//   console.log('form reset');
// });
// // Note: button.type = 'reset'

// Use Case Example : displaying user data on screen

/*
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = document.querySelector('#first-name');
  console.log(firstName.value);
  const lastName = document.querySelector('#last-name');
  console.log(lastName.value);
  const userAge = document.querySelector('#user-age');
  console.log(userAge.value);

  const result = document.querySelector('#result');
  result.innerHTML = `user: ${firstName.value} ${lastName.value}
  age ${userAge.value}`;
});
*/

// alternative : FormData Object (recommended)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  console.log(data.entries());
  data.entries().forEach((entry) => console.log(entry));
  // alternatively we can use for of instead of forEach()
  for (const value of data.values()) {
    console.log(value);
  }
  for (const [key, value] of data.entries()) {
    console.log(key, value);
  }
});
