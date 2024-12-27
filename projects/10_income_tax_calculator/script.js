const container = document.querySelector('.container');
const taxContainer = document.querySelector('.tax-container');
const newRegime = document.querySelector('.new-regime');

const incomeElement = document.querySelector('#income');
const result = document.querySelector('#result');
// console.log(result.className);

const calculate_button = document.querySelector('#calculate');
// console.log(calculate_button);

const reset_button = document.querySelector('#reset');

// selecting result related elements

const taxableIncomeElement = document.querySelector('#taxable-income');
// console.log(taxableIncomeElement);
const baseTaxElement = document.querySelector('#base-tax');
const surchargeElement = document.querySelector('#surcharge');
const cessElement = document.querySelector('#cess');
const totalTaxElement = document.querySelector('#total-tax');
const monthlySalaryElement = document.querySelector('#monthly-salary');

calculate_button.addEventListener('click', () => {
  newRegimeTaxation();
  result.classList.remove('hidden');
});

// function to calculate income tax based on different tax brackets of New Regime
const newRegimeTaxation = () => {
  const incomeElement = document.querySelector('#income');
  // console.log(incomeElement.value);

  let income = 0;
  if (incomeElement.value !== '') {
    income = Number(incomeElement.value);
  }
  // console.log(income);
  let tax = 0;

  if (income <= 300000 && income > 0) {
    tax = 0;
  } else if (income > 300000 && income <= 500000) {
    tax = 0;
    // a maximum rebate of 10000 is available if income <= 500000,
    // making the tax payable to 0
    // no rebate is available if income > 500000
  } else if (income >= 500000 && Number(income) <= 700000) {
    tax = ((income - 300000) * 5) / 100;
  } else if (income >= 700000 && income <= 1000000) {
    tax = ((income - 700000) * 10) / 100 + 400000 * (5 / 100);
  } else if (income >= 1000000 && income <= 1200000) {
    tax =
      ((income - 1000000) * 15) / 100 +
      (300000 * 10) / 100 +
      (400000 * 5) / 100;
  } else if (income >= 1200000 && income <= 1500000) {
    tax =
      ((income - 1200000) * 20) / 100 +
      (200000 * 15) / 100 +
      (300000 * 10) / 100 +
      (400000 * 5) / 100;
  } else if (income > 1500000) {
    tax =
      ((income - 1500000) * 30) / 100 +
      (300000 * 20) / 100 +
      (200000 * 15) / 100 +
      (300000 * 10) / 100 +
      (400000 * 5) / 100;
  }

  // calculation of surcharge if income > 50 lakhs
  const surcharge = surchargeCalculation(income, tax);

  let tax_before_cess = tax + surcharge;

  // calculation of cess
  const cess = (tax_before_cess * 4) / 100;

  const totalTax = tax_before_cess + cess;

  const monthlySalary = Math.round((income - totalTax) / 12);

  taxableIncomeElement.innerHTML = income;
  baseTaxElement.innerHTML = tax;
  surchargeElement.innerHTML = surcharge;
  cessElement.innerHTML = cess;
  totalTaxElement.innerHTML = totalTax;
  monthlySalaryElement.innerHTML = monthlySalary;
};

const surchargeCalculation = (inc, tax) => {
  let surcharge = 0;
  if (inc > 5000000) {
    surcharge = (tax * 10) / 100;
  } else if (inc > 10000000) {
    surcharge = (tax * 15) / 100;
  }

  return surcharge;
};

reset_button.addEventListener('click', () => {
  incomeElement.value = '';
  result.classList.add('hidden');
});
