import { it, expect, describe } from "vitest";
import { validateNotEmpty } from "./validation.js";

describe("validateNotEmpty()", () => {
  it("should throw an error if an empty string is provided", () => {
    const testString = "";

    expect(() => validateNotEmpty(testString)).toThrowError();
  });

  it("should throw an error if a string with only whitespaces is provided", () => {
    const testString = "  ";

    expect(() => validateNotEmpty(testString)).toThrowError();
  });

  it("should throw an error with the provided error message", () => {
    const testString = "";
    const testErrorMessage = "Test Error Message";

    expect(() => validateNotEmpty(testString, testErrorMessage)).toThrowError();
  });
});
