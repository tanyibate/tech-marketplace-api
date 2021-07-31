const superTest = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const apiUrl = "http://localhost:5000";
const app = require("../app");
const api = superTest(app);

describe("login", () => {
  it("/login", async () => {
    let response = await api
      .post("/api/v1/login")
      .send({
        email: "bate.tanyi@yahoo.com",
        password: "password",
      })
      .then((response) => {
        return response;
      });
    expect(response.status, "Status Successful").to.equal(200);
  });
});
