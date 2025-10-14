import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

//#region Transform to Number Test Suite
describe("transformToNumber", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";
    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should yield NaN for non-transformable values", () => {
    const input = "Invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN(result);
    expect(result2).toBeNaN(result2);
  });
});
//#endregion

//#region Clean Numbers Test Suite
describe("cleanNumbers()", () => {
  //NOTE: First Integration Test - Implicitly testing the cleanNumbers function which contains other functions inside
  it("should return an array of number values if an array of string values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf("number");

    //NOTE: .toEqual does a deep dive comparison so we don't get the errors with toBe due to reference type errors
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("shoud throw an error if an arra with at least one empty string is provided", () => {
    const numberValues = ["1", ""];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
//#endregion
