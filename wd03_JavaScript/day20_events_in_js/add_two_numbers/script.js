
const firstInput = document.querySelector('#first-number')
const secondInput = document.querySelector('#second-number')
const submitButton = document.querySelector('#btn')
const result = document.querySelector('#result')

submitButton.addEventListener('click', () => {
  result.innerHTML = `Result: ${Number(firstInput.value) + Number(secondInput.value)}`
})