const getPaymentTokenFromAPI = require("./6-payment_token");
const { expect } = require("chai")

describe("getPaymentTokenFromAPI", function () {
  it("test payment api return success", function (done) {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.haveOwnProperty('data', 'Successful response from the API');      
      done()
    })
  });
});
