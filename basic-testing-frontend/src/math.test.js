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
