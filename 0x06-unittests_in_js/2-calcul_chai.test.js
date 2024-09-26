const calculateNumber = require('./2-calcul_chai');
const { expect } = require("chai");


describe('CalculateNumber test', function () {
	describe('Test addition', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

	describe('Test subtraction', function () {
    it('should return -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

	describe('Test division', function () {
    it('should return 0.2', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('Test division infinite error', function () {
    it('should return error', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal("Error");
    });
  });

})
