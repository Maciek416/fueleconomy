'use strict';

process.env.NODE_ENV = 'test';

var should = require('should');
var fuel = require('../main');

describe('fueleconomy', function () {

  describe('.to', function () {

    it('should convert mpg to L/100km', function (done) {
      fuel("100mpg").to("L/100km").should.eql(2.352);
      done();
    });

    it('should convert L/100km to mpg', function (done) {
      fuel("1L/100km").to("mpg").should.eql(235.2);
      done();
    });

    it('should convert no consumption to infinite mpg', function (done) {
      fuel("0L/100km").to("mpg").should.eql(Infinity);
      done();
    });

    it('should convert no miles for any number of gallons to infinite consumption', function (done) {
      fuel("0mpg").to("L/100km").should.eql(Infinity);
      done();
    });

  });
});