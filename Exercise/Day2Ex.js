/* ============================================================================================

    EX 2 : 
            1. Declare variables for a person's information (name, age, and country)
            2. Initialize them with appropriate values

            3. Create variables of different types: string, number, boolean, array, and object
            
            4. Declare a variable and assign an initial value
            5. Reassign the variable with a new value

            6. Create two variables containing strings and concatenate them

            7. Use template literals to create a sentence using variables using backtick operator

            8. Declare variables with values of null and undefined

            9. Declare a variable globally and within a function block, observe the scope difference
                
                Hints:
                    let globalVar = "I am global";
                        
                    {
                        let localVar = "I am local";
                        TODO: Access globalVar and localVar here
                    }
                    TODO: Try accessing localVar outside the function-Block - what happens?
            

===============================================================================================*/


// ============= 1 n 2 ==========


//    let person_name     = "satz" 24
//    let person_age      = 24
//    let person_country  = "Germany"

// console.log("name:", person_Name);
// console.log(`age: ${person_age}`); // ${} templating litrel 
// console.log(`country: ${person_country}`);

// ======= 3 ==========

//  let speaker = "boat"
//  let price = 3000
//  let isWashed = "true"
//  let arr_value = [ 100, 200, 300 ]
//  const patientDetails = {
//     name        : "yuvan"
//     age         : 23
//     problem     : "cold"
//     appointment : 55     
//  }


// ========= 4 n 5 ==========

// let a = 3;
// a = 33;
// let b = 43;  
// b = 333;


//  ========= 6 ==========

// let favpos1 = "69 "
// let inaipu  = "and "
// let favpos2 = "sixty nine" // for my learning !!

// console.log(favpos1 + inaipu + favpos2);

// ======== 8 =========
  
//  let h; // undefined
//  let n = null;

// ======== 9 ==========

var y = 108;
{
    let a = 101;
    let z = 202
    console.log(a + y + z); // 411
}
console.log(y);  // 108
console.log(a ,  z);  // undefined 
console.log(y + a); // undefined