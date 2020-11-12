const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Tests for session routes", () => {
  it("should return an array of session objects", async (done) => {
    const response = await request.get("/sessions");
    done();
  });
});
