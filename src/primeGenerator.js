// Generates an array with the first N prime numbers.

function primeArrayGenerator(numberN){
	var numberToTest = 3;
	var primes = [2];
	while (primes.length < numberN){
		var isPrime = true;
		for ( var divisor=2; divisor<=Math.sqrt(numberToTest); divisor++){
			if ((numberToTest % divisor) === 0) {
				isPrime=false;
				break;
			}
		}
		if (isPrime) {
			primes.push(numberToTest);
		}
		numberToTest=numberToTest+1;
	}
	return primes;
};

module.exports=primeArrayGenerator;
// var eratosthenes = function(n) {
//     // Eratosthenes algorithm to find all primes under n
//     var array = [], upperLimit = Math.sqrt(n), output = [];
//
//     // Make an array from 2 to (n - 1)
//     for (var i = 0; i < n; i++) {
//         array.push(true);
//     }
//
//     // Remove multiples of primes starting from 2, 3, 5,...
//     for (var i = 2; i <= upperLimit; i++) {
//         if (array[i]) {
//             for (var j = i * i; j < n; j += i) {
//                 array[j] = false;
//             }
//         }
//     }
//
//     // All array[i] set to true are primes
//     for (var i = 2; i < n; i++) {
//         if(array[i]) {
//             output.push(i);
//         }
//     }
//
//     return output;
// };
