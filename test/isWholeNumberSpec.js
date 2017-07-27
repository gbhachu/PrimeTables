var expect = require('chai').expect;
var isWholeNumber = require("../src/isWholeNumber.js");

describe('isWholeNumber should throw \'Incorrect Input\' if input is not a whole number larger than 0.', function() {
  it('Should throw \'Incorrect Input\' when input is \'20.5\'', function() {
    expect(function () { isWholeNumber('20.5') }).to.throw(Error, 'Incorrect input.');
  });
  it('Should throw \'Incorrect Input\' when input is \'abc\'', function() {
    expect(function () { isWholeNumber('abc') }).to.throw(Error, 'Incorrect input.');
  });
  it('Should throw \'Incorrect Input\' when input is \'-1\'', function() {
    expect(function () { isWholeNumber('-1') }).to.throw(Error, 'Incorrect input.');
  });
  it('Should throw \'Incorrect Input\' when input is \'0\'', function() {
    expect(function () { isWholeNumber('0') }).to.throw(Error, 'Incorrect input.');
  });
  it('Should throw \'Incorrect Input\' when input is undefined', function() {
    expect(function () { isWholeNumber(undefined) }).to.throw(Error, 'Incorrect input.');
  });
  it('Should throw \'Incorrect Input\' when input is null', function() {
    expect(function () { isWholeNumber(null) }).to.throw(Error, 'Incorrect input.');
  });
});

describe('isWholeNumber should not throw error if input is a whole number larger than 0.', function() {
  it('Should not throw error when input is 10', function() {
    expect(function () { isWholeNumber('10') }).to.not.throw(Error);
  });
  it('Should not throw error when input is 10186', function() {
    expect(function () { isWholeNumber('10186') }).to.not.throw(Error);
  });
});

describe('isWholeNumber should return an integer if the input is correct.', function() {
  it('Should return the integer 10 when the input is \'10\'', function() {
    expect(isWholeNumber('10')).to.equal(10);
  });
  it('Should return the integer 123456 when the input is \'123456\'', function() {
    expect(isWholeNumber('123456')).to.equal(123456);
  });
});
