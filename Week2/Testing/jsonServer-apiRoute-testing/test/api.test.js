import { expect } from "chai";
// imports Chai
import { getUsers } from "../api.js";
// imports API function

describe("Users API", () => {
// describe() groups related tests
  it("should return users", async () => {
  // this is one individual test
    const users = await getUsers();

    expect(users).to.be.an("array");
    expect(users.length).to.be.greaterThan(0);
  });

  it("should return users with correct properties", async () => {
  // this is another individual test
    const users = await getUsers();

    expect(users[0]).to.have.property("id");
    expect(users[0]).to.have.property("name");
    expect(users[0]).to.have.property("email");
  });
});
