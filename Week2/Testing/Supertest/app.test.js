const request = require("supertest");
const app = require("./app.js");

describe("GET /api/users", () => {
  test("should return users successfully", async() => {
    const response = await request(app)
    .get("/api/users");

    expect(response.statusCode).toBe(200);

    expect(response.body.message)
    .toBe("Users fetched successfully");
  });
});