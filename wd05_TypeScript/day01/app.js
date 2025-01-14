"use strict";
// Number
let a = 10;
let b = 20;
// a = 'ten';
// Type 'string' is not assignable to type 'number'. ==> while writing the code itself
// app.ts:4:1 - error TS2322: Type 'string' is not assignable to type 'number'. ==> error when file is executed
// Note: still the code is converted to JS because it's a valid JS code, even though it is not valid in TS.
// String
let str = 'Shubham';
// boolean
let isExist = true;
// bigInt
// let bigInteger: bigint = 1234567898745632123456987n;
// BigInt literals are not available when targeting lower than ES2020. ==> while writing the code itself
// error: still converts the code into js as it is valid in js
// to avoid such error change tsconfig.json : es2016 => es2020
// null
let abc = null;
// undefined
let bcd = undefined;
// bcd = 0;
// error TS2322: Type '0' is not assignable to type 'undefined'.
// tsc --watch
let firstName = 'Shubham';
let balance = 160;
