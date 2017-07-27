var isWholeNumber = require("./isWholeNumber.js");
var primeGenerator = require("./primeGenerator.js")
var tableGenerator = require("./primeTableGenerator.js")
var displayTable = require ("./displayTable.js")

function primeTables(someString){
    var output = displayTable(tableGenerator(primeGenerator(isWholeNumber(someString))));
    for (var i = 0; i < output.length; i++)
      {
        console.log(output[i]);
      }
    return output;
}

module.exports = primeTables;
