/* ===================================================================

    EX 1 : PRINT THE NAME OF THE PRODUCT AND CALCULATE THE TAX
            OF THE PRODUCT, PRINT THE GRAND TOTAL WITH TAX 

====================================================================*/

let productName = "Perfume"
let Price       = 200;
let TaxP        = 10;

let tax = Price*TaxP/100

console.log("Product Name:", productName, "\nGrand Total:", Price+tax);
console.log("Product Name: " + productName + "\nGrand Total: " + Price+tax);
console.log(`Product Name: ${productName} \nGrand Total: ${Price+tax}`);

