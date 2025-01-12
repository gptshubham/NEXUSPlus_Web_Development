const username = 'Shubham';
const age = 20;
const balance = 300;

console.log('Hello, world!');

function updateBalance(balance) {
  balance += 20;
}

updateBalance(balance);

console.log(balance);

console.log('Captain Jack Sparrow');

console.log('Bug final commit');

console.log('Captain America');

console.log('Captain Cool MSD');

const root = document.querySelector('.root');
function showUserData() {
  const userName = document.createElement('div');

  userName.innerHTML = `Name: ${username}`;

  const userAge = document.createElement('div');

  userAge.innerHTML = `Age: ${age}`;

  const balanceAmount = document.createElement('div');

  balanceAmount.innerHTML = `Balance: ${balance}`;

  root.append(userName, userAge, balanceAmount);
  console.log(root);
}

showUserData();

function showDetailsInOneLine(name, age, balance) {
  const oneLiner = document.createElement('div');
  oneLiner.style.marginTop = '40px';
  oneLiner.style.fontSize = '20px';

  oneLiner.innerHTML = `Hello, I'm ${name}, I'm ${age} years old and I have Rs.${balance} in my bank!`;

  root.append(oneLiner);
}

showDetailsInOneLine(username, age, balance);
