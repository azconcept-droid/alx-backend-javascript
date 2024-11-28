const sendPaymentRequestToApi = require("./5-payment")
const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', function () {
  let spy;
  
  beforeEach(function () {
    if(!spy) {
      spy = sinon.spy(console)
    }
  })

  afterEach(function () {
    sinon.restore();
  })

	it('call sendPaymentRequestToAPI with 100, and 20', function () {

  sendPaymentRequestToApi(100, 20);

  expect(spy.log.calledOnceWith('The total is: 120'));
  });

  it('call sendPaymentRequestToAPI with 10, and 10', function () {

  sendPaymentRequestToApi(10, 10);

  expect(spy.log.calledOnceWith('The total is: 20'));
  });
});
