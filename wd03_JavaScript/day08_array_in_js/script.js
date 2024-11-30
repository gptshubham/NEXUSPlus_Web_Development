'use strict'
// let str = 'skg'
// let bool = true
// console.log(str == bool)

// Array Declaration
const arr = [2, 35, 1, 8, 'skg', true, undefined, null]
/*
console.log(arr)

// length property
console.log(arr.length)

// Accessing Elements of Array using indexing
console.log(arr[0])

// Accessing last element of an Array
console.log(arr[arr.length - 1])

// Accessing Elements of an Array using at() --> (latest also accepts -ve index)
console.log(arr.at(4))
console.log(arr.at(arr.length - 1))
console.log(arr.at(-1))
console.log(arr.at(-4))
*/

// Creating a copy of an array (Duplicate)
/*
let newarr = arr
console.log(newarr === arr)
// Note: both refer to the same memory location (not a copy)

// Deep Copy using structuredClone
newarr = structuredClone(arr)
console.log(arr === newarr)
*/

// Array Methods
// push()
arr.push(30)
console.log(arr)

// pop()
arr.pop()
console.log(arr)

// unshift()
arr.unshift(10)
console.log(arr)

// shift()
arr.shift()
console.log(arr)

// delete operation --> (not recommended)
delete arr.at(-2) // doesn't seem to work with at()
delete arr[0] // creates a hole
console.log(arr)
// hole --> contains nothing but space is reserved ==> <1 empty item>

// indexOf()
console.log(arr.indexOf('skg'))

// lastIndexOf()
arr.push('skg')
console.log(arr.indexOf('skg'))
console.log(arr.lastIndexOf('skg'))

// includes()
console.log(arr.includes(8))
console.log(arr.includes(80))

// slice()
let slicedArr = arr.slice(2, 5)
console.log(`sliced array +ve indexing: `)
console.log(slicedArr)

slicedArr = arr.slice(-5, -2)
console.log(`sliced array -ve indexing: `)
console.log(slicedArr)
// Note: slice() accepts -ve indexing

// splice(starting_index,total_elements_to_splice,values to add)
let splicedArr = arr.splice(2, 5, 'Shubham', 'Kumar', 'Gupta', 'SKG')
console.log(`spliced Array: `)
console.log(splicedArr)
console.log(`original Array: `)
console.log(arr)
// Note: splice() modifies the original array

// toString()
let str = arr.toString()
console.log(str)
console.log(arr)
console.log(str.slice(-7))

// join()
let stringFromArray = arr.join(' ')
console.log(stringFromArray)
console.log(arr)

// concat()
let arr1 = [2, 35, 6, 11]
let arr2 = [5, 12, 19, 20]
let concatenatedArray = arr1.concat(arr2)
console.log(concatenatedArray)
concatenatedArray = arr2.concat(arr1)
console.log(concatenatedArray)

let arr3 = [2, 4, 6, 8]
let arr4 = [1, 3, 5, 7]

concatenatedArray = arr1.concat(arr2, arr3, arr4)
console.log(concatenatedArray)

// 2D Array
let arr2D = [arr1, arr2, arr3, arr4]
console.log(arr2D)

// print first row to the console
console.log(arr2D[0])
// print last row to the console
console.log(arr2D.at(-1))
// print last element of the first row to the console i.e; 11
console.log(arr2D.at(0).at(-1)) // alternative 1
console.log(arr2D[0].at(-1)) // alternative 2
console.log(arr2D[0][arr2D[0].length - 1]) // alternative 3
console.log(arr2D[0][3]) // alternative 4
// print first element of the last row to the console i.e; 1
console.log(arr2D.at(-1)[0]) // alternative 1
console.log(arr2D.at(-1).at(0)) // alternative 2

// 3D Array
let arr3D = [arr2D, arr2D]
console.log(arr3D)
// print 11 from first 2D array to the console
console.log(arr3D[0][0].at(-1)) // alternative 1
console.log(arr3D[0][0][arr3D[0][0].length - 1]) // alternative 2
// print 1 from second 2D array to the console
console.log(arr3D.at(1).at(-1).at(0)) // alternative 1
console.log(arr3D[1].at(-1)[0]) // alternative 2
console.log(arr3D[1][3][0]) // alternative 3

// Converting 2D Array into 1D Array --> flat()
let newarr = arr2D.flat()
console.log(newarr)

// Converting 3D Array into 1D Array --> flat(infinity)
newarr = arr3D.flat(Infinity)
console.log(newarr)

// Confirming that the input provided is an Array
console.log(Array.isArray(newarr))
console.log(Array.isArray(arr3D))

// Creating array using 'new' keyword and Array() --> (not recommended)
let abc = new Array(2, 1, 4, 1)
console.log(abc)

// Bug with singleton array created using 'new' and Array()
let acb = new Array(10)
console.log(acb.length)
// Gives value as output instead of actual length of array, which is 1
