const calculateNumber = require('./1-calcul');
var assert = require('assert');

describe('CalculateNumber', function () {
	describe('Test addition', function () {
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

	describe('Test subtraction', function () {
    it('should return -4', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

	describe('Test division', function () {
    it('should return 0.2', function () {
      assert.equal(calculateNumber('DIVIDE',1.4, 4.5), 0.2);
    });
  });

  describe('Test division infinite error', function () {
    it('should return error', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), "Error");
    });
  });

})
