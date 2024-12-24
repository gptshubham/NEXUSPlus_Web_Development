// selecting elements
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

const age = document.querySelector('#age')
const genderMale = document.querySelector('#male')
const genderFemale = document.querySelector('#female')

const calculateButton = document.querySelector('#calculate');
const clearButton = document.querySelector('#clear');

const result = document.querySelector('#result');

calculateButton.addEventListener('click', () => {
  const bmi = Number(weight.value) / ((Number(height.value) / 100) ** 2)
  const roundedBMI = Math.round(bmi * 100) / 100
  result.innerHTML = `Result: ${roundedBMI}`
});

clearButton.addEventListener('click', () => {
  genderMale.checked = true;
  genderFemale.checked = false;
  age.value = 2
  height.value = 180
  weight.value = 65
  result.innerHTML = 'Result'
})