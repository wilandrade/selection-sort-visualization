const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should properly sort an array", () => {
    let testArr = [2, 3, 1, 4];
    let sort = new Sort(testArr);
    expect(sort.sort()).to.deep.equal([1, 2, 3, 4]);
  });
});
