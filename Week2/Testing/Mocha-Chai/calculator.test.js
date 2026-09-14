import {expect} from "chai";
import add from "./calculator.js";

describe("Addition", () => {
  it("should add numbers correctly", () => {
    expect(add(2,3)).to.equal(5);
  });
});
