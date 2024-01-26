/* ===================================================================

    EX 1 : PRINT THE NAME OF THE PRODUCT AND CALCULATE THE TAX
            OF THE PRODUCT, PRINT THE GRAND TOTAL WITH TAX 

====================================================================*/

// let perfume = 200
// let heading = "total Value of perfume is"
// const taxx = 20
// let taxType = "tax value is"
 
// let last_name = "reddy";
// console.log(last_name)

// console.log(taxType);

// console.log(perfume*10/100);

// console.log(heading);

// console.log(perfume + 20);


let productName = "Perfume"
let Price       = 200;
let TaxP        = 10;

let tax = Price*TaxP/100

console.log("Product Name:", productName, "\nGrand Total:", Price+tax);
console.log("Product Name: " + productName + "\nGrand Total: " + Price+tax);
console.log(`Product Name: ${productName} \nGrand Total: ${Price+tax}`);

