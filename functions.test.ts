const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  let testArr = shuffleArray([1, 2, 3, 4, 5, 6]);
  test("return an array", () => {
    expect(typeof testArr).toBe("array");
  });
  test("return same length", () => {
    expect([1, 2, 3, 4, 5, 6].length).toEqual(testArr.length);
  });
});
