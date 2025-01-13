const firstButton = document.querySelector('#nav-btn1');
const secondButton = document.querySelector('#nav-btn2');
const thirdButton = document.querySelector('#nav-btn3');

firstButton.addEventListener('click', () =>
  alert('You have clicked the first navigation button')
);
secondButton.addEventListener('click', () =>
  alert('You have clicked the second navigation button')
);
thirdButton.addEventListener('click', () =>
  alert('You have clicked the third navigation button')
);
