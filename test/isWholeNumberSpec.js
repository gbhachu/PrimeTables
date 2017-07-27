// Tests for the isWholeConvert function.

var expect = require('chai').expect;
var isWholeConvert = require("../src/isWholeNumber.js");

describe('isWholeConvert should throw \'Input incorrect, Please enter whole number greater than 0 to continue.\' if input is not a whole number larger than 0.', function() {
  it('Should throw \'Input incorrect, Please enter whole number greater than 0 to continue.\' when input is \'20.5\'', function() {
    expect(function () { isWholeConvert('20.5') }).to.throw(Error, 'Input incorrect, Please enter whole number greater than 0 to continue.');
  });
  it('Should throw \'Input incorrect, Please enter whole number greater than 0 to continue.\' when input is \'abc\'', function() {
    expect(function () { isWholeConvert('abc') }).to.throw(Error, 'Input incorrect, Please enter whole number greater than 0 to continue.');
  });
  it('Should throw \'Input incorrect, Please enter whole number greater than 0 to continue.\' when input is \'-1\'', function() {
    expect(function () { isWholeConvert('-1') }).to.throw(Error, 'Input incorrect, Please enter whole number greater than 0 to continue.');
  });
  it('Should throw \'Input incorrect, Please enter whole number greater than 0 to continue.\' when input is \'0\'', function() {
    expect(function () { isWholeConvert('0') }).to.throw(Error, 'Input incorrect, Please enter whole number greater than 0 to continue.');
  });
  it('Should throw \'Input incorrect, Please enter whole number greater than 0 to continue.\' when input is undefined', function() {
    expect(function () { isWholeConvert(undefined) }).to.throw(Error, 'Input incorrect, Please enter whole number greater than 0 to continue.');
  });
  it('Should throw \'Input incorrect, Please enter whole number greater than 0 to continue.\' when input is null', function() {
    expect(function () { isWholeConvert(null) }).to.throw(Error, 'Input incorrect, Please enter whole number greater than 0 to continue.');
  });
});

describe('isWholeConvert should not throw error if input is a whole number larger than 0.', function() {
  it('Should not throw error when input is 10', function() {
    expect(function () { isWholeConvert('10') }).to.not.throw(Error);
  });
  it('Should not throw error when input is 10186', function() {
    expect(function () { isWholeConvert('10186') }).to.not.throw(Error);
  });
});

describe('isWholeConvert should return an integer if the input is correct.', function() {
  it('Should return the integer 10 when the input is \'10\'', function() {
    expect(isWholeConvert('10')).to.equal(10);
  });
  it('Should return the integer 123456 when the input is \'123456\'', function() {
    expect(isWholeConvert('123456')).to.equal(123456);
  });
});
