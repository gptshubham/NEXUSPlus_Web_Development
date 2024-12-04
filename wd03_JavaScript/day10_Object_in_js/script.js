'use restrict'

// How to create object

const obj = {
  name: 'Shubham',
  accountBalance: 420,
  gender: 'Male',
  age: 20,
  account_number: 12121212,
  // 'account number' also allowed --> can only be accessed using squared bracket
  0: 20,
  1: 50,
  2: 70,
  undefined: 30,
  null: 'Mohan',
}

console.log(obj)
console.log(typeof obj)

// Accessing values stored in an Object using dot notation
console.log(obj.name)
console.log(obj.gender)
console.log(obj.age)

// Accessing values stored in an Object using bracket notation
console.log(obj['accountBalance'])
console.log(obj['account_number'])
console.log(obj['0'])
console.log(obj[1])

// undefined as key of an object
console.log(obj.undefined)
console.log(obj['undefined'])
// null as a key of an object
console.log(obj.null)
console.log(obj['null'])

// // Array is an Object
// const arr = [20, 50, 70]
// console.log(arr[0], obj[0])
// console.log(arr[1], obj[1])
// console.log(arr[2], obj[2])

// Object creation using new Object() --> not so popular
const person = new Object()
console.log(person)

// Property Addition in an Object
person.name = 'Shubham'
person.age = 120
person.gender = 'Male'

console.log(person)

// Property Deletion in an Object
delete person.age
console.log(person)

// Property Modification in an Object
person.name = 'skg'
console.log(person)

// Object creation using class --> when we have to create multiple objects with same keys
// Rarely used
class newPerson {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }
}

let person1 = new newPerson('Shubham', 20, 'Male')
let person2 = new newPerson('Mohit', 21, 'Male')
let person3 = new newPerson('Saurabh', 19, 'Male')
console.log(person1)
console.log(person1, person2)

// Common Object Methods

const obj2 = {
  name: 'Shubham',
  age: 20,
  account_balance: 420,
  gender: 'Male',
}

// Object.keys(obj)
let keys = Object.keys(obj2)
console.log(keys)

// Object.values(obj)
let values = Object.values(obj2)
console.log(values)

// Object.entries(obj)
let entries = Object.entries(obj2)
console.log(entries)

// Object.assign
const obj3 = { a: 1, b: 2 }
const obj4 = { c: 3, d: 4 }
const obj5 = { e: 5, f: 6 }
// const obj5 = Object.assign(obj3, obj4) // modifies the obj3 as well
const obj6 = Object.assign({}, obj3, obj4, obj5) // does not modify obj3
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6)

// Spread Operator
const obj7 = { ...obj3, ...obj4, ...obj5 }
console.log(obj7)
