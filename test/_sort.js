const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should properly sort a simple array", () => {
    const testArr = [5, 1, 4, 2, 3];
    console.log("BEFORE SORT: " + testArr);
    let sort = new Sort(testArr);
    console.log("mine: " + sort.sort());
    expect(sort.array).to.eql([1, 2, 3, 4, 5]);
  });
  it("should properly sort another array", () => {
    const testArr = [51, 77, 63, 8, 37];
    console.log("BEFORE SORT: " + testArr);
    let sort = new Sort(testArr);
    console.log("mine: " + sort.sort());
    expect(sort.array).to.eql([8, 37, 51, 63, 77]);
  });
});
