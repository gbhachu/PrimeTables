// Checks if the input is a whole number larger than 0.
function inputConverter(numberN) {
  var isNum = /^\d+$/.test(numberN);
  if (isNum && numberN !== '0') {
  	return parseInt(numberN, 10);
  }
  else {
    throw new Error ('Incorrect input.');
  }
}

module.exports = inputConverter;
