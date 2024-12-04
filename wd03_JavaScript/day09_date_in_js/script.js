/* Creation of a new date object */

// const d = new Date()

// confirming the data type of d
// console.log(typeof d)

/* Date Methods */

// console.log(d.toDateString())
// console.log(d.toString())
// console.log(d.toISOString())

// console.log(d.getDate())
// console.log(d.getDay())
// console.log(d.getMonth())

// console.log(d.getFullYear())
// console.log(d.getMilliseconds())
// console.log(d.getMinutes())
// console.log(d.getHours())
// console.log(d.getSeconds())

/* Input Formatting */

// const d = new Date(2000)
// console.log(d)

// const d = new Date('2022-10-20') // custom date as argument
// console.log(d)
// Note: In case of string as arg, month range is 1-12 and not 0-11

// const d = new Date('2022-10-20T10:10:10')
// console.log(d)
// console.log(d.toDateString())

// const d = new Date(2024, 4, 28)
// console.log(d.toString())
// Note: Here, we have Number as arg ==> month range is 0-11

// const d = new Date(2024, 5, 28, 10, 12, 45, 231)
// console.log(d.toString())

// console.log(d.getTime())
// Alternatively
// const now = Date.now()
// console.log(now)

// // Set Methods for Date Object
// const d = new Date()
// d.setDate(20)
// d.setFullYear(2021)
// d.setMonth(6)
// console.log(d)
// console.log(d.toString())

// console.log(d.toLocaleDateString())
// console.log(d.toLocaleString())
// console.log(d.toLocaleTimeString())

// // Date Calculation

// const date1 = new Date()
// const date2 = new Date('2025-4-21')

// console.log(date2 - date1) // 12133891389 (milliseconds)
// console.log(date2 > date1)
// console.log(date2 <= date1)

// Countdown Timer for Olympics, 2028
// Output: Days, hours, minutes, seconds

const date1 = new Date()
const date2 = new Date('2028-07-14T00:00:00')

const date = date2 - date1
// console.log(date)
const days = Math.floor(date / (1000 * 60 * 60 * 24))
// console.log(days)
const hours = Math.floor((date / (1000 * 60 * 60)) % 24)
// console.log(hours)
const minutes = Math.floor((date / (1000 * 60)) % 60)
// console.log(minutes)
const seconds = Math.floor((date / 1000) % 60)
// console.log(seconds)

console.log(
  `Olympics Countdown: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
)
