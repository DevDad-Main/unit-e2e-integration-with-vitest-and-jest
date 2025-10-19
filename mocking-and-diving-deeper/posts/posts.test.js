import { it, expect, describe } from "vitest";
import { extractPostData } from "./posts";

describe("extractPostData()", () => {
  it("should extract title and content from the provided form data", () => {
    const testTitle = "Test Title";
    const testContent = "Test Content";

    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };

    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });

  it("should throw an error if any of the form data is undefined", () => {
    const testTitle = undefined;
    const testContent = undefined;

    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };

    expect(() => extractPostData(testFormData)).toThrowError(
      "Invalid form data.",
    );
  });
});
