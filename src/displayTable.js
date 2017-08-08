// Takes in a 2D array and returns a formatted table (in the form of an array of strings) to later be displayed.

function displayTable(array2D){

  var longestNumber = array2D[array2D.length-1][array2D.length-1];
	var maxNoOfDigits = longestNumber.toString().length;
	var formattedTable = [];
	for (var i = 0; i < array2D.length; i++){
		formattedTable[i] ='|';
		for (var j = 0; j < array2D.length; j++){
			if (array2D[i][j] === null){
				formattedTable[i] = formattedTable[i] + ' '.repeat(maxNoOfDigits + 1) + '|';
			}
			else{
			spacesToAdd = maxNoOfDigits - array2D[i][j].toString().length;
			formattedTable[i] = formattedTable[i]  + ' '.repeat(spacesToAdd + 1) + array2D[i][j] + '|';
		    }
		}
	}
	return formattedTable;
}

module.exports = displayTable;
