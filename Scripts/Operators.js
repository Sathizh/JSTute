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

==============================================================*/

    let a = 20, b = 10
    let str1 = "Hello", str2 = "World"
    
    
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
    let x   = 12
    let sum = 5

    sum = sum + x // 12 + 5 = 17
    sum += x // 17 + 12 = 29
    console.log("sum =", sum);  // sum = 29
    
    sum = sum - x // 29 - 12 = 17
    sum -= x // 17 - 12 = 5 
    console.log("sum =", sum); // sum = 5
    
    sum = sum * x // 5 * 12 = 60
    sum *= x // 60 * 12 = 720
    console.log("sum =", sum); // sum = 720
    
    sum = sum / x // 720 / 12 = 60
    sum /= x // 60 / 12 = 5
    console.log("sum =", sum); // sum = 5