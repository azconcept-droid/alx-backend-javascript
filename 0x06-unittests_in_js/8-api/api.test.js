const { expect } = require("chai");
const request = require("request");

describe("Test Get Index page / endpoint", () => {
  it("Correct status code 200", (done) => {
    request("http://localhost:7865/", (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  });

  it("Correct status code 404", (done) => {
    request("http://localhost:7865/*", (err, res, body) => {
      expect(res.statusCode).to.equal(404)
      done()
    })
  });

  it("Correct result", (done) => {
    request("http://localhost:7865/", (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system")
      done()
    })
  })
});
