// Declaration of String
/*
let str1 = 'Hello Coder Army'
console.log(str1)

let str2 = 'Hello JavaScript'
console.log(str2)

let str3 = `Hello String Literal`
console.log(str3)

let price = 50
console.log(`Price of the Tomato is ₹${price}.`)
console.log(`Price of the fresh tomato is ₹${price}. Get it asap.`)
*/

// String Concatenation
/*
let s1 = 'Hello'
let s2 = 'Coder Army'
console.log(s1 + s2)
let s3 = s1 + ' ' + s2
console.log(s3)
// Note: string literal is more advanced than string concatenation

// length property
console.log(s1.length)
console.log(s3.length)
*/

// // print "hello coder army" with quotes
// console.log(`"Hello Coder Army"`)
// console.log(`'Hello Coder Army'`)

// \n vs string literal for multi line string
let message = 'Rohit Bhaiya Shandaar, \nZabardast, \nZindabad'
// console.log(message)
message = `Rohit Bhaiya do baar Shandaar,
Zabardast,
Zindabad`
// console.log(message)

// Escape Character \
let comment = 'Rohit Bhaiya teen baar Shandaar, \\nZabardast, \\nZindabad'
// console.log(comment)

// Indexing
let special = 'Shubham'
// console.log(special[0])
// console.log(special[3])

// // charAt() method as substitute of indexing
// console.log(special.charAt(3))

// Changing Case
/*
// toUpperCase
let strtemp = special.toUpperCase()
console.log(strtemp)

// toLowerCase()
strtemp = special.toLowerCase()
console.log(strtemp)
// Note: No change in original string
console.log(special)
*/

// Searching in String
/*
console.log(message)
// indexOf()
console.log(message.indexOf('Bhaiya'))

// lastIndexOf()
console.log(message.lastIndexOf('a'))
console.log(message.indexOf('a'))

// includes()
console.log(message.includes('Rohit'))
*/

// Extracting Sub-string
/*
message = 'Hollo Coder Army'

// slice()
let start = message.indexOf('C')
let end = message.indexOf('r') + 1
// beware about that end's index position
let slicedMessage = message.slice(start, end)
console.log(slicedMessage)

// substring() --> similar to slice()
slicedMessage = message.substring(start, end)
console.log(slicedMessage)

// slice() vs substring()
slicedMessage = message.slice(-10, -5)
console.log(slicedMessage)
slicedMessage = message.slice(-10, -6)
console.log(slicedMessage)
// Note: starting index < ending index

// substr() --> deprecated
slicedMessage = message.substr(-4, 4)
console.log(slicedMessage)
*/

// Replacing Content
/*
// replace()
let greeting = 'Hello, Coder!'

let updatedGreeting = greeting.replace('Coder', 'world')
console.log(updatedGreeting)

// replaceAll()
let user = 'Shubham Kumar Gupta'
let updatedUser = user.replaceAll('a', 'A')
console.log(updatedUser)
updatedUser = updatedUser.replaceAll('m', 'M')
console.log(updatedUser)
*/

// Splitting String
/*
let greetingArray = greeting.split()
console.log(greetingArray)

greetingArray = greeting.split('')
console.log(greetingArray)

greetingArray = greeting.split(' ')
console.log(greetingArray)
*/

// Trimming Whitespace
/*
// trim()
greeting = '       Hello Coder Army       '
console.log(greeting)

updatedGreeting = greeting.trim() + '!'
console.log(updatedGreeting)

// trimStart()
greeting = '       Hello Coder Army!'
console.log(greeting)

updatedGreeting = greeting.trimStart()
console.log(updatedGreeting)

// trimEnd()
greeting = 'Hello Coder Army           '
console.log(greeting + '!')

updatedGreeting = greeting.trimEnd() + '!'
console.log(updatedGreeting)
*/

// new way to create string
/*
let latestString = new String('Hello Coder Army')
console.log(latestString)

console.log(typeof latestString)
// string is stored in heap memory since it's of object data type

console.log(latestString[0])
console.log(latestString[latestString.length - 1])
*/
