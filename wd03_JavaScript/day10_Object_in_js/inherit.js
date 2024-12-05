let user1 = {
  name: 'Shubham',
  age: 20,
};

let user2 = {
  amount: 100,
  money: 50,
};

console.log(user2.amount);
console.log(user2.name);

user2.__proto__ = user1;
console.log(user2.name);
console.log(user2.age);

let arr = [10, 20, 30, 40];
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__ == Object.prototype);

console.log(arr.__proto__.__proto__.__proto__ == null);
