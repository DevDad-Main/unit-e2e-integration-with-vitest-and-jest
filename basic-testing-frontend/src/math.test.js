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

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  // Allow us to test the function without actually calling it
  const resultFn = () => {
    add();
  };

  // Then we assert that the function throws an error incombination
  // expect(resultFn).not.toThrow(); // If we want to test that it won't return an error we use the .not function
  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
