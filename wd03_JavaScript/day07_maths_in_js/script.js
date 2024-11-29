// declaration of number
/*
let num1 = 231 //  stack memory
let num2 = new Number(231) // heap memory
console.log(num2)
console.log(typeof num2)
let num3 = new Number(231)
console.log(num1 == num2) // true --> loose equality converts object into Number then compares
console.log(num1 == num3) // true
console.log(num2 == num3) // false --> since memory references are different, hence not equal
console.log(num1 === num2) // false
console.log(num1 === num3) // false
console.log(num2 === num3) // false
*/

// Number Methods
/*
// toFixed()
let num = 231.68
console.log(num.toFixed(1))
console.log(num.toFixed(3))
// How mary digits do you want after decimal point

// toPrecision
console.log(num.toPrecision(4))
console.log(num.toPrecision(3))
console.log(num.toPrecision(2)) // 2.3e+2 = {2.3 * (10**2)}
// total number of digits you want

// toExponential
console.log(num.toExponential(3)) // 2.317e+2 = {2.317 * (10**2)}
console.log(num.toExponential(2)) // 2.32e+2 = {2.32 * (10**2)}
// argument: number of digits you want after decimal point
// then converts the result in exponentiation form

// toString()
console.log(num.toString())
console.log(typeof num.toString())

// valueOf()
console.log(num.valueOf())
*/

// Math
/*
// Math Properties
console.log(Math.E)
console.log(Math.PI)
console.log(Math.LN10)

// Math Methods

// random()
console.log(Math.random())

// floor() vs ceil()
let num4 = 23.5
console.log(Math.floor(num4))
console.log(Math.ceil(num4))
num4 = 23.9
console.log(Math.floor(num4))
console.log(Math.ceil(num4))
num4 = 23.1
console.log(Math.floor(num4))
console.log(Math.ceil(num4))
*/

// random integer between 1 and 10 (both inclusive)
let maximum = 10
let minimum = 1
let guess = Math.floor(Math.random() * 10) + 1
// formula
guess = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
// console.log(guess)

// random integer between 1 and 10 (both exclusive)
maximum = 10 - 1
minimum = 1 + 1
guess = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
// console.log(guess)

// direct formula for both exclusive
maximum = 10
minimum = 1
guess = Math.floor(Math.random() * (maximum - minimum - 1) + (minimum + 1))
// console.log(guess)

// Ludo
let max = 6
let min = 1
let roll = Math.floor(Math.random() * (max - min + 1) + min)
// console.log(roll)
