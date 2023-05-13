"use strict"; 

function parsePartCode(code){

    let result = {
        supplierCode: getSupplierCode(code),
        productNumber: getProductNumber (code),
        size: getSize(code),
        
    }
    return result; 


}

function getSupplierCode(code){
let addressofColon = code.Indexof(":"); 
let result = code.substring(0, addressofColon); 
return result; 
}

function getProductNumber(code){
let addressofColon = code.indexOf(":"); 
let addressOfDash = code.indexOf("-"); 
let result = code.substring(addressofColon + 1,addressOfDash); 
return result; 
}

function getSize(code){
    let addressOfDash = code.indexOF("-"); 



}

function displayPart(part){ 
    console.log("parsePartCode" + parsePartCode); 
    
}

let code1 = "ACME:123-L"; 
let part1 = parsePartCode(code1); 
displayPart(part1); 


let code2= "DI:12345-M"; 
let code3 = "ACE:1-12"; 

let part1 = parsePartCode(code); 

console.log("SupplierCode: " ${part1.supplierCode}); 
console.log("productNumber: "${part1.productNumber})
console.log("Size: "${part1.size})

let code1Supplier = getSupplierCode(code); 
