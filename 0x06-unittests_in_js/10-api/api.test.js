const { expect } = require("chai");
const request = require("request");

const BASE_URL = "http://localhost:7865"

describe("Test Payment System API", () => {
  it("GET / return 200 status code", (done) => {
    request(`${BASE_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  });

  it("GET /* return 404 status code", (done) => {
    request(`${BASE_URL}/*`, (err, res, body) => {
      expect(res.statusCode).to.equal(404)
      done()
    })
  });

  it("GET / return correct response", (done) => {
    request(`${BASE_URL}/`, (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system")
      done()
    })
  })

  it("GET /cart/:id return 200 status code", (done) => {
    request(`${BASE_URL}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  });

  it("GET /cart/:id return correct response valid id number", (done) => {
    request(`${BASE_URL}/cart/12`, (err, res, body) => {
      expect(body).to.equal("Payment methods for cart 12")
      done()
    })
  });

  it("GET /cart/:id return 404 status code id string", (done) => {
    request(`${BASE_URL}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404)
      done()
    })
  });

  it("GET /cart/:id return 404 status code id random strings", (done) => {
    request(`${BASE_URL}/cart/poiu-890-kjhg`, (err, res, body) => {
      expect(res.statusCode).to.equal(404)
      done()
    })
  });

  it("GET /available_payments return correct status code 200", (done) => {
    request(`${BASE_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  });

  it("GET /available_payments return correct response", (done) => {
    request(
    {
      url: `${BASE_URL}/available_payments`,
      method: 'GET',
      json: true,
    }, (err, res, body) => {
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
      done()
    })
  });

  it("POST /login return correct status code 200", (done) => {
    request({
      url: `${BASE_URL}/login`,
      method: 'POST',
      json: true,
      body: {userName: 'betty'},
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  });

  it("POST /login return correct response", (done) => {
    request({
      url: `${BASE_URL}/login`,
      method: 'POST',
      json: true,
      body: {userName: 'betty'},
    }, (err, res, body) => {
      expect(body).to.equal('Welcome betty')
      done()
    })
  });
});
