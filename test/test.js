var assert = require('assert');
let app = require('../index.js');

const { reduceArray } = app;

describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });

  describe('#reduceArray', function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(reduceArray([1, 2, 3, 4])), true);
    });
    it('should return an array of even numbers', function(){
        assert.deepEqual(reduceArray([1, 2, 3, 4]), [2, 4]);
    });
  })