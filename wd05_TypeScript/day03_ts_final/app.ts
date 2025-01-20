const num: number = 10;

interface person {
  name: string;
  age: number;
  gender: string;
  uid?: number;
  // making a property optional using ?
}

const obj: person = {
  name: 'Shubham',
  age: 20,
  gender: 'male',
  // uid: 1234
};

interface customer {
  name: string;
  age: number;
  balance: number;
}

// Partial<>
const obj2: Partial<customer> = {
  // using Partial<> to make all the properties optional
  name: 'Shubham',
  balance: 210,
};

// Required<>
const obj3: Required<customer> = {
  // using Required<> to make all the properties compulsory
  name: 'Shubham',
  age: 20,
  balance: 210,
};

// Readonly<>
const obj4: Readonly<customer> = {
  // using Readonly<> to make an object properties read only
  name: 'shubham',
  age: 20,
  balance: 210,
};

// obj4.name = 'SKG'
// Cannot assign to 'name' because it is a read-only property.ts(2540)

// Array of Objects
interface people {
  name: string;
  age: number;
}

interface manager {
  salary: number;
  id: string;
}

const arr: (people | manager)[] = [
  { name: 'shubham', age: 18 },
  { name: 'saurabh', age: 20 },
  { salary: 120000, id: '122321' },
];

// Function in TS

function greet(name: string): string {
  console.log(name);
  return `Hello, ${name}!`;
}

console.log(greet('Shubham'));

function meet(name: string, value: number) {
  console.log(`Hello, I'm ${name} and I have RS.${value} in my Account.`);
}

meet('Shubham', 120);

// Default Parameter
function neet(msg: string = 'skg') {
  console.log(msg);
}

neet();
neet('shubham');

// Optional Parameter
function GATE(person?: string) {
  console.log(person || 'Rohit Negi');
}

GATE('skg');
GATE();

// Arrow Function

const sumOfTwo = (a: number, b: number): number => a + b;
const result = sumOfTwo(3, 2);
console.log(result);

// callback function
function placeOrder(order: number, callback: chill): void {
  const amount: number = order + 10;
  callback(amount);
}
// type of callback function argument and return value
type chill = (amount: number) => void;
// calling placeOrder function with callback
placeOrder(10, (amt) => console.log(amt));

// Rest Parameter

function total(...rest: number[]) {
  let sum_total: number = 0;
  rest.forEach((val: number) => (sum_total += val));
  console.log(sum_total);
}

total(2, 3, 1, 4, 123, 1, 12, 10);

// extends keyword
interface human {
  name: string;
  age: number;
}

interface Teacher extends human {
  salary: number;
  id: string;
}

const teacher1: Teacher = {
  name: 'Rohit',
  age: 20,
  salary: 120,
  id: 'RN123',
};
