//Array tester to see if correct number of primes are being generated

var expect = require('chai').expect;
var primeArrayGenerator= require("../src/primeGenerator.js");

describe('primeArrayGenerator returns the first N primes.', function() {
  it('When N=1, it should return 2', function() {
    expect(primeArrayGenerator(1)).to.deep.equal([2]);
  });
  it('When N=3, it should return 2, 3, 5', function() {
    expect(primeArrayGenerator(3)).to.deep.equal([2, 3, 5]);
  });
  it('When N=10, it should return 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.', function() {
    expect(primeArrayGenerator(10)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});
