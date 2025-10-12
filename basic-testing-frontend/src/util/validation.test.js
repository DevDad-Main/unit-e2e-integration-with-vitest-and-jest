import { it, expect } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

//#region Validate Number Tests
it("should validate that a number is a valid number", () => {
  const input = 1;
  const result = validateNumber(input);

  expect(result).toBe(true);
});

it("should validate that a number is not a valid number", () => {
  const input = "1";
  const validationFn = () => validateNumber(input);

  expect(validationFn).toThrow(/is not a number/);
});
//#endregion

//#region Validate String Not Empty Tests
it("should validate that a string is not empty", () => {
  const input = "1";
  const result = validateStringNotEmpty(input);

  expect(result).toBe(true);
});

it("should validate that a string is empty", () => {
  const input = "";
  const result = validateStringNotEmpty(input);

  expect(result).toBe(false);
});
//#endregion
