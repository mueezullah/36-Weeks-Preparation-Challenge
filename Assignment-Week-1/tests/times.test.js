const calculateTime = require("../medium/times");

describe("calculateTime", () => {
  test("calculates sum from 1 to 100 correctly", () => {
    const result = calculateTime(100);
    expect(result.sum).toBe(5050);
    expect(typeof result.timeTaken).toBe("number");
  });

  test("calculates sum from 1 to 100000 correctly", () => {
    const result = calculateTime(100000);
    expect(result.sum).toBe((100000 * (100000 + 1)) / 2);
  });
});
