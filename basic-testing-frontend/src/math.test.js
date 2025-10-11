import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in array", () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acc, cur) => acc + cur, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  // Arrange
  const inputs = ["Invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN(result);
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2", "3"];

  const result = add(numbers);

  const expectedResult = numbers.reduce((acc, cur) => +acc + +cur, 0);
  expect(result).toBe(expectedResult);
});
