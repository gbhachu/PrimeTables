var primeTables = require('./src/primeTables.js'); 

var N = process.argv[2];


console.time('Time taken: ');
primeTables(N);
console.timeEnd('Time taken: ');
