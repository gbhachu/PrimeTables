// Checks if the input is a whole number larger than 0 and if so, converts the string into an integer.

 function isWholeConvert(numberN) {
   var isNum = /^\d+$/.test(numberN);
     if (isNum && numberN!=='0') {
       	return parseInt(numberN, 10);
   }
   else {
     throw new Error ('Input incorrect, Please enter whole number greater than 0 to continue.');
   }
 }

 module.exports= isWholeConvert;
