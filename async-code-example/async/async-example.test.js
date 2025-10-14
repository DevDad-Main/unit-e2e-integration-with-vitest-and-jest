import { describe, expect, it } from "vitest";
import { generateToken } from "./async-example.js";

//#NOTE: we pass an extra argument to the callback function of it, so that the test knows where we will be done testing for our asynchronous code.Otherwise Vitest and Jest won't actually wait for any other inner callback functions to be called. Just invokes generateToken func and will not wait for the callback to executed therefore it will not find any expects/expectations and pass our test.
//
it("should generate a token value", (done) => {
  const testUserEmail = "test@example.com";

  generateToken(testUserEmail, (err, token) => {
    //#region NOTE: we are using try/catch here because all of the toBe and to functions throw an error if they fail, by default if we don't have the async code use case then Vitest/Jest will pickup these errors and display them/consider the test to have failed and show us the reason why it failed.
    //#endregion

    //#region NOTE: But because we are using the done callback function then these errors will not be picked up by the test runner. so we need to wrap our code in  a try catch block and pass the errors onto the done function that we catch
    //#endregion

    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});
