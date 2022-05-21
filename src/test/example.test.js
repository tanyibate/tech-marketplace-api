const superTest = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = require("../app");
const api = superTest(app);

describe("It runs", () => {
  it("Verify Response", async () => {
    let response = await api.get("/").then((response) => {
      return response;
    });
    expect(response.status, "Status Successful").to.equal(200);
    expect(response.body.message, "Correct Message").to.equal(
      "🦄🌈✨👋🌎🌍🌏✨🌈🦄"
    );
  });
});
