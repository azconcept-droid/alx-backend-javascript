const sendPaymentRequestToApi = require("./3-payment")
const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', function () {
	it('should call Utils', function () {
  const spy = sinon.spy(Utils);

  sendPaymentRequestToApi(100, 20);

  expect(spy.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;

  spy.calculateNumber.restore();
  });
});
