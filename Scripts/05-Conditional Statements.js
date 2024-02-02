/* ========================================================

        TOPIC COVERED : CONDITIONAL STATEMENTS, SWITCH CASE

========================================================*/


/*  ========================= Simple If Statement ========================= 
        Syntax

        if(<Expression>){
           ! True Body
        }
        else{
           ! False Body
        }
*/

// let num1 = 6, num2 = 4;
// let result = num1 > num2;  // 6 > 4  -> true
// if(result){
//     console.log("Num 1 is biggest");
// }
// else{
//     console.log("Num 2 is biggest");
// }


// if(num1 > num2)
//     console.log("Num 1 is bigger");
// else
//     console.log("Num 2 is bigger");
//     console.log("I'm Always here");


// if(num1 > num2){
//     console.log("Num 1 is bigger");
// }
// console.log("I'm Always here");

/* ========================= Ladder If Statement ========================= 

? if - else if - else if - else if - else

        ? Syntax

        if(<Expression>){
            ! if's True Body
        }
        else if(<Expression>){
            ! else if's True Body
        }
        else{
            ! Optional
        }

*/

// let num1 = 6, num2 = 4, num3 = 7;

// if (num1 > num2 && num1 > num3)   // 6 > 4 && 6 > 7 -> true && false -> false
//     console.log("Num1 is bigger");
// else if (num2 > num1 && num2 > num3) // 4 > 6 && 4 > 7 -> false && false -> false
//     console.log("Num2 is bigger");
// else
//     console.log(`${num3} is bigger`); // 7 is bigger


// Simplified statement

// let num1 = 6, num2 = 9, num3 = 7;

// if (num1 > num2 && num1 > num3)   // 6 > 9 && 6 > 7 -> false && false -> false
//     console.log("Num1 is bigger");
// else if (num2 > num3)               // 9 > 7 -> true 
//     console.log("Num2 is bigger"); //NUm2 is bigger  ---> control goes to after else statement
// else
//     console.log("Num3 is bigger");

// let num1 = 10, num2 = 4, num3 = 7;

// if (num1 > num2 && num1 > num3)   // 10 > 4 && 10 > 7 -> true && true -> true
//     console.log("Num1 is bigger"); // NUm1 is bigger  ---> control goes to after else statement else if will not been check
// else if (num2 > num3)              
//     console.log("Num2 is bigger"); 
// else
//     console.log("Num3 is bigger");

 
// ! Order of execution matters 
// let num1 = 10, num2 = 8, num3 = 7;

// if(num2 > num3) // 8 > 7
// {
//     console.log("Num2 is bigger"); 
// } else if(num1 > num2 && num1 > num3){
//     console.log("Num1 is bigger");
// }
// else{
//     console.log("Num3 is bigger");
// }


/* ================================= Nested If Statement ==========================

    Syntax

        if (<Expression>)
        {
            if (<Expression>)
            {
                .....
            } 
            else
            {

            }
        } 
        else
        {
            if (<Expression>)
            {

            }
            else
            {

            }   
        }
 */

// if(true){

// }

// if(false){

// }

// if(false){
    
// } else if (true){

// } else {

// }

// if(true){

// } else if (false){ // will not execute due to true if found

// } else {

// }

// let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];


// Sat -> play cricket
// let day = "Sat";
// if (day == "Sun"){

// } 
// else if (day == "Mon"){

// }
// else if (day == "Tue"){

// }
// else if (day == "Wed"){

// }
// else if (day == "Thur"){

// }
// else if (day == "Fri"){

// } 
// else if (day == "Sat"){
    // Play Cricket
// } else 
// {
    // Invalid Day
// }

/*
================================================================================

Ladder if to Switch case Conversion 


! Syntax

switch (<match>){
    case <pair>:{
        
    }
    case <pair>:{

    }
    case <pair>:{

    }
    .....
    default : {

    }
}

================================================================================
*/
// let result = "Sun" === "sun";  // false

/* 
    ? setting alarm to days
    Mon         = 06.30 AM
    Tue - Fri   = 07:00 AM
    Sat         = 08:00 Am
    Sun         = No Alarm

*/

// let day = "Sun"

// Sample Input and Output
// day = "Sun" -> without break ===> Respective Case match will be print and also all the followed cases will be print.
// day = "Sun" -> with break ===> Respective Case match Only print then control will goes to out side of the Switch statement.
// day = "MissMatch" -> string MissMatch is not a case in the below switch statement so DEFAULT will be executed.

// With Break
// day = "Sun" ==> No Alarm, Sleep Well
// day = "Wed" ==> Wake at 07:00 AM
// day = "Wedd" ==> Invalid Day

//? Case sensitive : all the literals (char) should be same

// switch (day){ // it always consider the data type as well as Case sensitivity
//     case "Sun": {
//         console.log("No Alarm, Sleep Well");
//         break; // ? Control goes to outside of the switch statement
//     }
//     case "Mon": {
//         console.log("Wake at 07:00 AM"); 
//         break;
//     }
//     case "Tue": {
//         console.log("Wake at 07:00 AM"); 
//         break;   
//     }
//     case "Wed": {
        
//         console.log("Wake at 07:00 AM"); 
//         break;
//     }
//     case "Thur": {
        
//         console.log("Wake at 07:00 AM"); 
//         break;
//     }
//     case "Fri": {
        
//         console.log("Wake at 07:00 AM"); 
//         break;
//     }
//     case "Sat": {
        
//         console.log("Wake at 08:00 AM"); 
//         break;
//     }
//     default :{
//         console.log("Invalid day");
//     }
// }


// break, continue


// ! Simplified case
let day = 3

switch (day){ // it always consider the data type as well as Case sensitivity
    case 1: {
        console.log("No Alarm, Sleep Well");
        break;
    }
    case "Mon": 
    case "Tue": 
    case 3: 
    case "Thur":
    case "Fri": {
        
        console.log("Wake at 07:00 AM");
        break;
    }
    case "Sat": {
        console.log("Wake at 08:00 AM");
        break;
    }
    default :{
        console.log("Invalid day");
    }
}