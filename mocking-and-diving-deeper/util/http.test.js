import { it, vi, expect, describe } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testValue" };

//NOTE: Designing our own fetch mock method to avoid the need for a real fetch request and also because we cant mock the fetch package for exmaple like we have done in the past due to fetch being a globally available function
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

//NOTE: Replacing the fetch global function with our custom fetch mock method
vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest()", () => {
  it("should return any available response data", () => {
    const testData = { key: "value" };

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });
});
