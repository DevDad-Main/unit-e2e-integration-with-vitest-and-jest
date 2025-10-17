import { it, vi, expect, describe } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testValue" };

//NOTE: Designing our own fetch mock method to avoid the need for a real fetch request and also because we cant mock the fetch package for exmaple like we have done in the past due to fetch being a globally available function
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a String.");
    }

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

  it("should convert the provided data to json before sending the requst", async () => {
    const testData = { key: "value" };

    //#region NOTE: The issue is with this is that if the data is parsed as a string and we have stringified data then we would assume the test would pass, but the issue is then is that the below expectation will then resolve.
    //NOTE: This dosen't check to see if we resolve, this only checks for this .not.rejects with the toBe("Not a String.") above, Expects to not reject to this value, not to not reject overall
    //#endregion
    // return expect(sendDataRequest(testData)).not.rejects.toBe("Not a String.");

    //NOTE: Better way to handle this is to use async await and wrap it in a trycatch block. This now will allow our test to pass even if we do resolve. But if our data wasn't stringified correctly then we would fail this test as we catch that error in our catch block and errorMessage will be Not a String.
    let errorMessage;

    try {
      await sendDataRequest(testData).not.rejects.toBe("Not a String.");
    } catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).not.toBe("Not a String.");
  });
});
