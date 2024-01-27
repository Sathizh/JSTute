/* ============================================================================================

    Day3 : 
            Exercise 1: String to Number
                Convert the string variables to numbers and perform addition

            Exercise 2: Number to String
                Convert the number variables to strings and concatenate them

            Exercise 3: Boolean to Number
                Convert the boolean variables to numbers and perform subtraction
            
            Exercise 4: Implicit Type Casting
                Identify the result of the implicit type casting in the following expressions
                
                let implicitResult1 = "5" + 2;     
                let implicitResult2 = "5" - 2;
                let implicitResult3 = "5" * 2;
                let implicitResult4 = "5" / 2;

                console.log(implicitResult1); // What is the result?       
                console.log(implicitResult2); // What is the result?       
                console.log(implicitResult3); // What is the result?  
                console.log(implicitResult4); // What is the result?                 

===============================================================================================*/


// ===== Answers: =======

// ======== 1 ==========

// let str1 = "333"  
// let str2 = "111"

//  str1 = Number(str1); 
//  str2 = Number(str2); 
//  console.log("Addition: " , str1 + str2 ); // Addition: 444

// ===== 2 =====

// let a = 10
// let b = 30
 
// a = String(a);
// b = String(b);
// console.log(a + b); // 1030

// ======= 3 =======

// let b = true
// let c = false

// b = Number(b);
// c = Number(c);
// console.log(b - c); // 1 - 0 = 1

// ======== 4 ========

let implicitResult1 = "5" + 2;
let implicitResult2 = "5" - 2;
let implicitResult3 = "5" * 2;
let implicitResult4 = "5" / 2;

console.log(implicitResult1); // What is the result? 52
console.log(implicitResult2); // What is the result? 3
console.log(implicitResult3); // What is the result? 10
console.log(implicitResult4); // What is the result? 2.5      
 