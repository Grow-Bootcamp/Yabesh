const assert = require("assert");
const { add } = require("./app.js");

describe("Addition", () => {
  it("should return 5", () => {
    assert.strictEqual(add(2,3), 5);
  });
});