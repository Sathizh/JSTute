/* ========================================================

        TOPIC COVERED : TYPE CONVERSION  

========================================================*/

// Type Conversion
    // 1. Internal Conversion
    // 2. External Conversion
    
// 1. Internal Conversion

// let x;
// console.log(x, typeof x); // undefined undefined

// let x = 10;
// console.log(x, typeof x); // 10 number

// let x = "Sample";
// console.log(x, typeof x); // Sample string

// let x = true
// console.log(x, typeof x); // true boolean

// -------------------- INTERNAL CONVERSION -----------

// let x = 10 + "20"
// console.log(x, typeof x); // 1020 string

// let x = 10 - "20"
// console.log(x, typeof x); // -10 number

// let x = true + true
// console.log(x, typeof x); // 2 number


// 2. External Conversion

// String()
// Number()
// Boolean()

// let x = 1
// console.log(Boolean(x), typeof x); // true number

// let x = 0
// console.log(Boolean(x), typeof x); // false number

// let x = 123
// console.log(Boolean(x), typeof x); // true number

// let x = -123
// console.log(Boolean(x), typeof x); // true number

// let x = null
// console.log(Boolean(x), typeof x); // false object

// let x = undefined
// console.log(Boolean(x), typeof x); // false undefined

// let x = 0
// x = Boolean(x)
// console.log(x, typeof x); // false boolean

// let x = "123"
// x = Number(x)
// console.log(Boolean(x), typeof x); // true number

// let x = "333 Yuvan"
// x = Number(x)
// console.log(x, typeof x); // NaN number

// let x = 123
// x = String(x)
// console.log(x, typeof x); // 123 string


// Number("333")  => parseInt("333")

// let x = "333"
// x = parseInt(x)
// console.log(x, typeof x); // 333 number

// let x = "333 Yuvan"
// x = parseInt(x)
// console.log(x, typeof x); // 333 number

// let x = "33.3 Yuvan"
// x = parseFloat(x)
// console.log(x, typeof x); // 33.3 number


// let x = "one23"
// x = parseInt(x)
// console.log(x, typeof x); // NaN number


// let x = "0ne"
// x = Number(x)
// console.log(x, typeof x); // NaN number


// let x = "3f"
// x = parseFloat(x)
// console.log(x, typeof x); // NaN number

