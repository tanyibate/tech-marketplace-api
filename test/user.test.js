const superTest = require("supertest");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const apiUrl = "http://localhost:5000";
const app = require("../app");
const api = superTest(app);

const userCredentials = {
  email: "bate.tanyi@yahoo.com",
  password: "password",
};
//now let's login the user before we run any tests
var authenticatedUser = superTest.agent(app);
before(function (done) {
  authenticatedUser
    .post("/api/v1/login")
    .send(userCredentials)
    .end(function (err, response) {
      expect(response.status).to.equal(200);
      done();
    });
});

describe("get profile", () => {
  it("should return a 200 response if the user is logged in", function (done) {
    authenticatedUser
      .get("/api/v1/auth/user")
      .expect(200)
      .then((response) => {
        assert(response.body.email, "bate.tanyi@yahoo.com");
        done();
      })
      .catch((err) => done(err));
  });
});
