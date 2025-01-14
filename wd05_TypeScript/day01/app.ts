// Number
let a: number = 10;
let b: number = 20;

// a = 'ten';
// Type 'string' is not assignable to type 'number'. ==> while writing the code itself
// app.ts:4:1 - error TS2322: Type 'string' is not assignable to type 'number'. ==> error when file is executed
// Note: still the code is converted to JS because it's a valid JS code, even though it is not valid in TS.

// String
let str: string = 'Shubham';

// boolean
let isExist: boolean = true;

// bigInt
// let bigInteger: bigint = 1234567898745632123456987n;
// BigInt literals are not available when targeting lower than ES2020. ==> while writing the code itself
// error: still converts the code into js as it is valid in js
// to avoid such error change tsconfig.json : es2016 => es2020

// null
let abc: null = null;

// undefined
let bcd: undefined = undefined;

// bcd = 0;
// error TS2322: Type '0' is not assignable to type 'undefined'.

// tsc --watch
let firstName: string = 'Shubham';

let balance: number = 160;
