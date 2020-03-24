const request = require('supertest');
const app = require("../server/app");
var httpMocks = require('node-mocks-http');

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/test")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});