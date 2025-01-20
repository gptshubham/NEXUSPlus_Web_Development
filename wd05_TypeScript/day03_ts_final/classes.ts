class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello ${this.name}`);
  }
}
// blueprint of an object

const obj1 = new Person('shubham', 20);

console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.greet());

const obj1b = new Person('saurabh', 20);
console.log(obj1b);
console.log(obj1b.name);
console.log(obj1b.age);
console.log(obj1b.greet());

// public private protected
class Customer {
  public name: string;
  private age: number;
  protected balance: number;

  constructor(name: string, age: number, balance: number) {
    this.name = name;
    this.age = age;
    this.balance = balance;
  }

  meet(): void {
    console.log(`meeting ${this.name}, he is ${this.age} years old.`);
  }
}

const c1 = new Customer('shubham', 20, 250);

console.log(c1.name);
// console.log(c1.age);
// // Property 'age' is private and only accessible within class 'Customer'.
// console.log(c1.balance);
// // Property 'balance' is protected and only accessible within class 'Customer' and its subclasses.

c1.meet();
// it is done to avoid accidental changes in the value of a particular value

class Employee extends Customer {
  salary: number;
  constructor(salary: number, name: string, age: number, balance: number) {
    super(name, age, balance);
    this.salary = salary;
  }

  greet(): void {
    console.log(this.name);
    // console.log(this.age);
    // // Property 'age' is private and only accessible within class 'Customer'.
    console.log(this.balance);
  }

  meet(): void {
    console.log(this.name);
  }
}

const e1 = new Employee(200, 'skg', 20, 420);
console.log(e1);
e1.greet();
e1.meet();

// Generics: Template

function value(
  a: number | string | Array<number> | boolean
): number | string | Array<number> | boolean {
  return a;
}

console.log(value(100));
console.log(value('Hundred'));
console.log(value([10, 11, 12, 1, 3, 1, 14]));
console.log(value(true));

// Better Alternative: make the function a Generic Function using Template <T>(a:T):T

function value_generic<T>(a: T): T {
  return a;
}

console.log(value_generic(100));
console.log(value_generic('Hundred'));
console.log(value_generic([10, 11, 12, 1, 3, 1, 14]));
console.log(value_generic(true));
console.log(value_generic(['one', 'two', 'three', 'four']));

// alternatively : we can call like this also
console.log(value_generic<number>(100));
console.log(value_generic<string>('Hundred'));
console.log(value_generic<number[]>([10, 11, 12, 1, 3, 1, 14]));
console.log(value_generic<boolean>(true));
console.log(value_generic<string[]>(['one', 'two', 'three', 'four']));

// Generic with interface
interface Admin<T, U> {
  name: string;
  age: number;
  uid: T;
  salary: U;
}

const obj10: Admin<number, number> = {
  name: 'shubham',
  age: 20,
  uid: 1234,
  salary: 420,
};

const obj11: Admin<string, number> = {
  name: 'skg',
  age: 21,
  uid: '1234',
  salary: 420,
};

const obj12: Admin<number, string> = {
  name: 'saurabh',
  age: 19,
  uid: 4321,
  salary: '420',
};
