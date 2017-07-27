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
}

module.exports=primeArrayGenerator;
