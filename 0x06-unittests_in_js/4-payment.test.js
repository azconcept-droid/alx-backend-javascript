const sendPaymentRequestToApi = require("./3-payment")
const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', function () {
	it('stub Utils.calculateNumber to always return 10', function () {
  const spy = sinon.spy(console);
  const stub = sinon.stub(Utils);

  // stub calculate number to always return 10
  stub.calculateNumber.returns(10);

  sendPaymentRequestToApi(100, 20);

  expect(stub.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
  expect(spy.log.calledOnceWith('The total is: 10'));
  sinon.restore();
  });
});
