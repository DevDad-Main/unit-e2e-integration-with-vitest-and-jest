import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
