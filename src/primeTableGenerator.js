// Takes an N number array as input and returns the (N+1)x(N+1) multiplication table as a two-dimensional array.

function primeTableGenerator(array){
	var currentRow = array.slice(0);
    currentRow.unshift(null);
    var multTable = [ currentRow.slice(0) ];
    currentRow[0] = array[0];
	for (var i = 1; i <= array.length; i++){
		   for(var j = 1; j <= array.length; j++){
		 	    currentRow[j] = array[i-1] * currentRow[j];
		    }
		 multTable.push(currentRow);
	     currentRow = array.slice(0);
	     currentRow.unshift(array[i]);
	}
	return multTable;
}

module.exports = primeTableGenerator;
