const { expect } = require("chai");
const request = require("request");

describe("Test Get Index page / endpoint", () => {
  it("Correct status code 200", () => {
    request("http://localhost:7865/", (err, res, body) => {
      expect(res.statusCode).to.equal(200)
    })
  });

  it("Correct status code 404", () => {
    request("http://localhost:7865/*", (err, res, body) => {
      expect(res.statusCode).to.equal(404)
    })
  });

  it("Correct result", () => {
    request("http://localhost:7865/", (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system")
    })
  })
});
