const calculateNumber = require('./0-calcul');
var assert = require('assert');

describe('CalculateNumber', function () {
	describe('0 + 0 = 0', function () {
    it('should return 0', function () {
      assert.equal(calculateNumber(0, 0), 0);
    });
  });

	describe('1.2 + 1.3 = 2.5', function () {
    it('should not return 2.5', function () {
      assert.notEqual(calculateNumber(1.2, 1.3), 2.5);
    });
  });

	describe('-1.2 + 1.3 = 0', function () {
    it('should return 0', function () {
      assert.equal(calculateNumber(-1.2, 1.3), 0);
    });
  });

  describe('1 + 3 = 4', function () {
    it('should return 4', function () {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });

  describe('1 + 3.7 = 5', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
  });

  describe('1.2 + 3.7 = 5', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('1.5 + 3.7 = 5', function () {
    it('should return 6', function () {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
})
