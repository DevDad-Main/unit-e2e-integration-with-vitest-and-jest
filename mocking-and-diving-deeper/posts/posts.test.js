import { it, expect, describe } from "vitest";
import { extractPostData } from "./posts";

describe("extractPostData()", () => {
  it("should extract title and conten from the provided form data", () => {
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
});
