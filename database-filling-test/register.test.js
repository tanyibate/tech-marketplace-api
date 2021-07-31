const superTest = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const apiUrl = "http://localhost:5000";
const api = superTest(apiUrl);

describe("login", () => {
  it("/login", async () => {
    var d = new Date();
    var n = d.getTime();
    let response = await api
      .post("/api/v1/register")
      .send({
        email: n.toString() + "@yahoo.com",
        password: "123",
        fullName: "Bate Tanyi",
      })
      .then((response) => {
        return response;
      });
    expect(response.status, "Status Successful").to.equal(200);
  });
});
