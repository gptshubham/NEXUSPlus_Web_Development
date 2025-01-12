const username = 'Shubham';
const age = 90;
let balance = 300;
const creditors = {
  creditor1: ['Rohan', 50],
  creditor2: ['Mohan', 90],
};

console.log('Hello, world!');

function updateBalance(amount) {
  amount += 20;
}

updateBalance(balance);

const root = document.querySelector('.root');
function showUserData() {
  const userName = document.createElement('div');

  userName.innerHTML = `Name: ${username}`;

  const userAge = document.createElement('div');

  userAge.innerHTML = `Age: ${age}`;

  const balanceAmount = document.createElement('div');
  balanceAmount.id = 'balance-container';

  balanceAmount.innerHTML = `Balance: ${balance}`;

  root.append(userName, userAge, balanceAmount);
  console.log(root);
}

showUserData();

function showPaymentDetails() {
  const paymentDetails = document.createElement('div');
  paymentDetails.style.fontSize = '2rem';
  paymentDetails.style.marginTop = '2rem';

  const paymentTo = document.createElement('div');
  const payment1 = `Amount Paid to Mr. ${creditors.creditor1[0]}: ${creditors.creditor1[1]}`;
  balance -= creditors.creditor1[1];
  const payment2 = `Amount Paid to Mr. ${creditors.creditor2[0]}: ${creditors.creditor2[1]}`;
  balance -= creditors.creditor2[1];
  paymentTo.innerHTML = `${payment1}<br>${payment2}`;
  paymentDetails.append(paymentTo);
  root.append(paymentDetails);
}

showPaymentDetails();

function showUpdatedBalance(amount) {
  const balanceElement = document.querySelector('#balance-container');
  balanceElement.innerHTML = amount;
}

showUpdatedBalance(balance);
