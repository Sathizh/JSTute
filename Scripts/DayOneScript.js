/* 
==================================================================

        TOPIC COVERED : VARIABLES, NAMING CONVENTIONS, DATA TYPES, 

=====================================================================
*/

a = 10;
var a;
a = 10;
let a = 20
const a = 10

// Syntax
//  <Keyword> <Variable Name> = <Value>;

// Naming conventions

    // Bad
    let userfirstname;

    // Snake Case
    let user_first_name;

    // Camel Case
    let userFirstName;

    // Pascal Case
    let UserFirstName;

// Rules:

    // starts with _ 
    let _sampleKeyword;
    
    // starts with $
    let $sampleKeyword 
    
    // starts with Alph
    let sampleKeyword

    // Bad
    // starts with numbs
    // let 1stvalue;
    
    // starts with spacial char
    // let @value;



// Data types

    // 1. Number
    // 2. String
    // 3. Boolean
    // 4. Object
    // 5. Array
    // 6. Null
    // 7. Undefined
    // 8. Symbols

// Numbers
    let intValue = 1010
    let floatingValue = 1010.12

    // int a = 10;

// Strings
    let name1 = "Yuvan 1+2"
    let name2 = 'Sathish'
    // Back Dec
    let name3 = `Sathish`

    let passg1 = 'Hi I am Yuvan'
    // Error case
    // let passg2 = 'Hi I'm Yuvan'
    // Sol
    let passg3 = "Hi I'm Yuvan"
    
    let passg4 = `Good Morning, ${name2}` // Good Morning, Sathish

// Boolean

    let isExist = true;
    let isAvailable = false;

// Object -> Key Pair values
    const person = {
        name : "Yuvan",
        age  : 24,
        isMale: true
    }

// Arrays
    const arr = [ 10, 20, 30 ]

    arr[0]  // 10
    arr[2]  // 30
    arr[3]  // undefined

