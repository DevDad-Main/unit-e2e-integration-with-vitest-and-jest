import { vi } from "vitest";

export const promises = {
  //NOTE: We now will return a promise to properly simulate what the original logic was doing, as in our test we werent using a promise so technically we weren't simulating it correctly
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
