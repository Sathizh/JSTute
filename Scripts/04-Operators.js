/* ========================================================

        TOPIC COVERED : OPERATORS

========================================================*/

// Types of Operators
// 1. Arithmetic Operator
// 2. Assignment Operator
// 3. Comparison Operator
// 4. Logical Operator
// 5. Unary Operator
// 6. Ternary Operator
/* ============================================================

    1. Arithmetic Operator
         +, -, *, / and **
         TODO: Self learn % modulo operator

==============================================================*/

    // let a = 20, b = 10
    // let str1 = "Hello", str2 = "World"
    
    
    // let sum       = a + b; // 30
    // let strConCat = str1 + str2 // HelloWorld
    
    // let diff = a - b // 10
    // let strDiff   = str1 - str2 // NaN
    
    // let product = a * b // 200
    
    // let quotient = a / b // 2
    
    // Anything divided by zero is INFINITE / ERROR
    
    // let pow = 5 ** 3 // 5 power 3 => 5 * 5 * 5 => 125 
    // let p   =  Math.pow(5, 3) // 125

    // console.log(pow, p); // 125 125
    
    // let d = Math.round(3.1)  // below 5 
    // let e = Math.ceil(3.1)
    // let f = Math.floor(3.1)
    // let g = Math.trunc(3.1)
    
    // console.log(d, e, f, g);  // 3 4 3 3
    
    
/* ============================================================

    2. Assignment Operator
        =, +=, -=, *=, /= 

==============================================================*/
    

// interviewer question 
    // let x   = 12
    // let sum = 5

    // sum = sum + x // 12 + 5 = 17
    // sum += x // 17 + 12 = 29
    // console.log("sum =", sum);  // sum = 29
    
    // sum = sum - x // 29 - 12 = 17
    // sum -= x // 17 - 12 = 5 
    // console.log("sum =", sum); // sum = 5
    
    // sum = sum * x // 5 * 12 = 60
    // sum *= x // 60 * 12 = 720
    // console.log("sum =", sum); // sum = 720
    
    // sum = sum / x // 720 / 12 = 60
    // sum /= x // 60 / 12 = 5
    // console.log("sum =", sum); // sum = 5

/* ============================================================

    5. Unary Operator
        ++, -- and -

        ++ Increment Operator
        -- Decrement Operator
        - Unary Minus

============================================================== */

// Increment Operator (++)

    // 1. Pre - Increment
    // 2. Post - Increment

// let num = 10;
// console.log("Pre - Increment", ++num); // Pre - Increment 11
// console.log("Post - Increment", num++); // Post - Increment 11

// ================ PRE INCREMENT ( ++ Variable ) ===============

// let result = ++num
// console.log(result, num); // 11 11

// ================ POST INCREMENT ( Variable ++ ) ===============

// let result = num++
// console.log(result, num); // 10 11




// Decrement Operator (--)

    // 1. Pre - Decrement
    // 2. Post - Decrement
    

// let num = 10;
// console.log("Pre - Decrement", --num); // Pre - Decrement 9
// console.log("Post - Decrement", num--); // Post - Decrement 9


// ================ PRE DECREMENT ( -- Variable ) ===============

// let result = --num
// console.log(result, num); // 9 9

// ================ POST DECREMENT ( Variable -- ) ===============

// let result = num--
// console.log(result, num); // 10 9


// - Unary Minus


// let num = 12
// console.log(-num);  // -12


// let num = -12
// console.log(-num);  // 12

/* ============================================================

    6. Ternary Operator ?:

==============================================================*/

// Ternary Operator Syntax

    // <Expression> ? <true block> : <false block>

    // ?  Just To know
    // if statement syntax

    // if(expression){
        // true block
    // }
    // else{
        // false block
    // }


    // ? Example for Ternary

    // Biggest of 2 numbers
    // let num1 = 5, num2 = 10
    // let Biggest = num1 > num2 ? num1 : num2  // 5 > 10 ? 5 : 10  --> false ? 5 : 10 -->
    // console.log(Biggest); 

    // let result = false ? "true" : false
    // console.log(result, typeof result);

    // let a = 2, b = 5, biggest
    
    // (a > b) ? biggest = a : biggest = b
    // console.log("biggest" , biggest); // 5

/* ============================================================

    3. Comparison Operator
        <, >, <=, >=, ==, ===, !=, !== 

==============================================================*/

//  Comparison OPerator it's also known as RELATIONAL OPERATORS it always return the boolean value

let lesThan          = 10 < 5; // False
let greaterThan      = 10 > 5; // True
let lesThanEqual     = 10 <= 5; // either less nor equal => True otherwise False ==> ans: False
let greaterThanEqual = 10 >= 5; // True
let isEqual          = 10 == 5; // False
let isStrictlyEqual  = 100 === "100"; // false
let notEqual         = 10 != 10 // false
let strictlyNotEqual = 10 !== '10'; // true
    
// ================== Number and Number Comparison =============  

// 8 < 8        False
// 8 > 8        False
// 8 >= 8       True
// 8 <= 8       True
// 8 == '8'     True
// 8 === '8'    False
// 8 != '8'     False
// 8 !== '8'    True


// ================== String and String Comparison =============  

// let Result = "Pen" > "Pencil"

// ASCII  - American Standard Code for Information Interchange

// A - 65, B - 66 ...
// a - 97, b - 98 ...

// console.log(Result);

// ================== String and Number Comparison =============  

// let x = "3", y = 2
// console.log(x > y); // True

/* ============================================================

    4. Logical Operator
        &&, ||, ! and ^

==============================================================*/


/*
    ? && - Logical AND

Bike        Petrol      Can Go
True        True        True
True        False       False
False       True        False
False       False       False

*/


/*
    ? || - Logical OR

Bike        Car         Can Go
True        True        True
True        False       True
False       True        True
False       False       False

*/

/* ! - Logical NOT

    True  -> False
    False -> True

*/
    let x = 1, y = 2, z = 3;

    let result1 = x < y && x < z // True && True -> True
    let result2 = x < y || x > z // True || False -> True
    let result3 = !(x < y) // !(True) -> False

    
/*
    ^ - logical XOR (same value -----> false)
    !Truth Table
        True        True        False
        True        False       True
        False       True        True
        False       False       False
 */
     