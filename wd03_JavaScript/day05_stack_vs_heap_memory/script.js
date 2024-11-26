let a = 10
let b = a
b = 30
console.log(b)
console.log(a)

// Primitive Data Type vs Non-Primitive Data Types

// Primitive Data Type : Immutable
// Non-Primitive Data Types : Mutable

let obj1 = {
  id: 20,
  naming: 'Shubham',
}

let obj2 = obj1
// console.log(obj1)
// console.log(obj2)

obj2.id = 30 // Call by Value
console.log(obj1)
console.log(obj2)
