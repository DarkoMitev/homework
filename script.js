let inputPrice = 119.95 ;
let inputQuantity = 30 ;
let inputTaxRate = 5 ; 
let sum = inputPrice * inputQuantity ;
let sumTax = (inputTaxRate/100) * sum ;
let sumTotal = sum + sumTax ;

console.log(sumTotal)