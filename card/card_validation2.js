const luhnCheck = require('./Luhncheck');

 function cardValidation(cardNumber){
  // Define regex patterns for each card type

 // MasterCard numbers start with 5 or 2and are 16 digits long.
const masterCardPattern=/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
// VisaCard numbers start with 4 and are 16 digits long
const visaCardPattern=/^3[47][0-9]{13}$/;
// American Express numbers start with 3 and are 15 digits long
const americanExpressPattern=/^3\d{14}/;
// Discover number can start with 65 or 6011 and 16 digits long
const Discover= /^6011\d{12}|^65\d{14}/
// verve number can start with 5060 or 5061 and are 16 digits long
const verve= /^506(0|1)\d{12}$/
 
// Check if the card number matches any of the patterns
if( luhnCheck(cardNumber)=== true){
if(masterCardPattern.test(cardNumber)){
  return "Master Card";
}else if(visaCardPattern.test(cardNumber)){
  return "visa Card"
}else if (americanExpressPattern.test(cardNumber)){
  return "American Express"
}
} else{
  return "Invaild Card"

}
 }
const cardNumber="5399412261574698";
// const luhnCheck1 = luhnCheck("5399412261574698")
 const cardtype= cardValidation(cardNumber);
 console.log('The card type is', cardtype);
 //console.log(luhnCheck1)
 module.exports = cardNumber;
 