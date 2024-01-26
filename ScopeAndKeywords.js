/* ========================================================

        TOPIC COVERED : SCOPE, HOSTING, KEYWORDS  

========================================================*/

// x = 10
// var a = 10;
// let b = 10;
// const c = 10;


// Scope Level
    // var -> Function Scope
    // let and const -> Block Scope

    
 // var 

 test1 = "test1"
{
    var test2 = "test2"
}
console.log(test1, test2); //test1 test2

// let

let letOuter = "test1"
{
    let letInner = "test2"

    console.log("letInner", letInner); // letInner test2
}

console.log(letOuter); // test1
console.log(letInner); // undefined

// Day2Script.js
// {
//     var x = 10;
//     {
//         const z = 10;
//     }
//     console.log(z); // undefined

// }


var outer = 10;
{
    let inner = 10;
}
let inner = 10;


//  Hosting
// var, let, const
// Top Level Hosting  Top to Bottom

// console.log(a); // undefined
// var a = 10; 
// console.log(a); // 10

// console.log(a); // !Error: not initialized
let a = 10
// TODO: replace the value of a as 20
console.log(a); // 10



// -----------------------------------------------------  Day2Script  -----------------------------------------------------


// Keywords  - Reserved words
// let, const, var, true, false, function, if, else, for, break, do, switch, return, null, undefined
// typeof, NaN

    
