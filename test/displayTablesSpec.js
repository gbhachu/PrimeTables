var expect = require('chai').expect;
var displayTable= require("../src/displaytable.js");

var primes3 = [ [ null, 2, 3, 5],
                     [2, 4, 6, 10],
                     [3, 6, 9, 15],
                     [5, 10, 15, 25] ];

var primes3Displayed = [ '|   |  2|  3|  5|',
                              '|  2|  4|  6| 10|',
                              '|  3|  6|  9| 15|',
                              '|  5| 10| 15| 25|', ];

var primes5 = [ [ null, 2, 3, 5, 7, 11],
                     [2, 4, 6, 10, 14, 22],
                     [3, 6, 9, 15, 21, 33],
                     [5, 10, 15, 25, 35, 55],
                     [7, 14, 21, 35, 49, 77],
                     [11, 22, 33, 55, 77, 121] ]

var primes5Displayed = [ '|    |   2|   3|   5|   7|  11|',
                              '|   2|   4|   6|  10|  14|  22|',
                              '|   3|   6|   9|  15|  21|  33|',
                              '|   5|  10|  15|  25|  35|  55|',
                              '|   7|  14|  21|  35|  49|  77|',
                              '|  11|  22|  33|  55|  77| 121|' ]



describe('displayTable should return an array of formatted strings', function() {
  it('Check for 2x2 table', function() {
    expect(displayTable([[null, 2], [2, 4] ])).to.deep.equal(['|  | 2|', '| 2| 4|' ]);
  });
  it('Check for 4x4 table', function() {
    expect(displayTable(primes3)).to.deep.equal(primes3Displayed);
  });
  it('Check for 6x6 table', function() {
    expect(displayTable(primes5)).to.deep.equal(primes5Displayed);
  });
});
