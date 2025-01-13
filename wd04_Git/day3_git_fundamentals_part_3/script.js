const navigation = document.querySelector('#navigation');

firstButton.addEventListener('click', () =>
  alert('You have clicked the first navigation button')
);
secondButton.addEventListener('click', () =>
  alert('You have clicked the second navigation button')
);
thirdButton.addEventListener('click', () =>
  alert('You have clicked the third navigation button')
);

const geeksWorld = document.querySelector('.geeks-world');
geeksWorld.addEventListener('click', () => {
  document.querySelector('header').classList.remove('hidden');
  geeksWorld.classList.add('hidden');
navigation.addEventListener('click', (e) => {
  if (e.target.id === 'log-in') {
    alert('You have clicked log-in button');
  } else if (e.target.id === 'sign-up') {
    alert('You have clicked sign-up button');
  }
});
