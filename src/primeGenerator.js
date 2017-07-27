// Generates an array with the first N prime numbers.

function primeArrayGenerator(numberN){
	var counter = 2;
	var numberToTest = 3;
	var primes = [];
	primes[0] = 2;
	while (counter<=numberN){
		var isPrime=true;
		for ( var divisor=2; divisor<=Math.sqrt(numberToTest); divisor++){
			if ((numberToTest % divisor) === 0) {
				isPrime=false;
				break;
			}
		}
		if (isPrime) {
			primes.push(numberToTest);
			counter=counter+1;
		}
		numberToTest=numberToTest+1;
	}
	return primes;
}

module.exports=primeArrayGenerator;
