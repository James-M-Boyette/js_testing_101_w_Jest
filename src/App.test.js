import { helloFunction } from "./App";

// console.log(hello());

describe("helloFunction", () => {
  // This string describes the object of your test - what the test is testing
  it("should output the string 'hello'", () => {
    // `it` describes what the test should achieve
    expect(helloFunction()).toBe("Hello");
    // This is the actual code that performs a test; it takes the funciton you're testing as its first parameter, and can then have subsequent testing methods attached thereafter. In this case, `toBe` allows us to tell Jest to expect "Hello" ... but our app.js is outputting "hello" ... so the test fails
  });
});
