import {
  it,
  describe,
  expect,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import { User } from "./hooks";

const testEmail = "test@test.com";
let user = new User(testEmail);

//#region NOTE: Calling the hooks like this will work for the whole file globally. Whereas if we call these hooks inside our describe test suite then it will only work for that specific test suite
//#endregion
describe("hooks", () => {
  //NOTE: Runs before all tests
  beforeAll(() => {
    console.log("beforeAll");
  });
  //NOTE: Runs before each test
  beforeEach(() => {
    console.log("beforeEach");
  });
  //NOTE: Runs after all tests
  afterAll(() => {
    console.log("afterAll");
  });
  //NOTE: Runs after each test
  afterEach(() => {
    user = new User(testEmail); // Reset the user object
    console.log("afterEach");
  });

  it("should update the email", () => {
    const newTestEmail = "test2@test.com";

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });

  it("should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  it("should store the provided email value", () => {
    expect(user.email).toBe(testEmail);
  });

  it("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  it("should still have an email property after clearing the email", () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  });
});
