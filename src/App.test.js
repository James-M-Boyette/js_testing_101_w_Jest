import { helloFunction, addFunction, removeSNames } from "./App";

/**
 * * Video #1:
 * Here, we have our first test ...
 */

// console.log(hello());
// We can log anything and it will be displayed as a part of our test (even though the test will fail)

describe("Video 1's 'helloFunction()' ...", () => {
  // This string *describes* the object of your test - what the test will be testing
  it("... should output the string 'hello'", () => {
    // `it` describes what the test should achieve
    // In both cases, this allows us to make our console more readable - and does *not* affect the actual test. See next for the actual testing logic ...
    expect(helloFunction()).toBe("Hello");
    // This is the actual code that performs a test; it takes the funciton you're testing as its first parameter, and can then have subsequent testing methods attached thereafter ...
    // In this case, `toBe` allows us to tell Jest to expect "Hello" ... but our app.js is outputting "hello" ... so the test fails
  });
});

/**
 * * Video #2:
 * Here, we will work out how to perform multiple checks within one test ...
 */

describe("Video #2's addFunction", () => {
  it("SHOULD add two numbers", () => {
    expect(addFunction(1, 2)).toBe(3);
    // Here, again, we're testing a function from another file. Of note, because we're exporting/importing that function, we can have our test pass-in arguments to that function! So 'expect' will pass `1` and `2` to our 'addFunction()' and then perform a conditional check (under the hood) of the results against what we've proscribed as the correct output (in 'toBe')
    // expect(addFunction(2, 2)).toBe(3);
    expect(addFunction(2, 2)).toBe(4);
    // Note: we can have multiple 'expect' statements - but all have to pass in order for this test to pass! (Clearly, `2+2 !== 3`)
  });
  it("should NOT add strings", () => {
    expect(addFunction(1, "1")).toBe(null);
    // Here, we want our test to confirm that only numbers are being returned from our function ... but this requires additional logic to be added to our `addFunction()` function (see App.js).
  });
  it("should NOT add other objects", () => {
    expect(addFunction({}, "1")).toBe(null);
    expect(addFunction(1, [])).toBe(null);
    expect(addFunction(16, [{}, "stuff", 3])).toBe(null);
    // .. BUT we have a problem: if our conditional (in the imported function) isn't narrow enough, or is too broad, we'll get false positives/negatives. In this case, we're passing a hash in for 'x' ... and a hash *ISN'T* a string, so our first version of the conditional won't be triggered, and we'll get back something we ultimately don't want (a "{object object}1" string o.O)
  });
});

/**
 * * Video #3:
 * Here, we work-out how to do TDD, or "Test Driven Development" ...
 */

// For an example of one might approach TDD, the following is an example of the inital scaffolding of a test. Using largely psuedo code for our statements, we can work out what we'll want our sister function to actually do ...
describe("Video #3's TEST sketch", () => {
  it("SHOULD remove all 's' names", () => {});
  it("should NOT remove all other names", () => {});
  it("should account for case", () => {});
});

// Here,
describe("Video #3's removeSNames Function", () => {
  // const names = ["Scott", "Courtney", "Wes", "scott", "Capt. America", "Steve"];
  /**
   * *This should work, shouldn't it?
   */
  it("SHOULD remove all 'S' names", () => {
    const names = ["Scott", "Courtney", "Steve"];
    // 'toContain' is one of many "matchers" in Jest - look at documentation for more of them
    expect(removeSNames(names)).not.toContain("Scott");
    expect(removeSNames(names)).not.toContain("Steve");
  });
  it("should NOT remove all other names", () => {
    const names = ["Scott", "Courtney", "Wes", "scott", "Capt. America"];
    expect(removeSNames(names)).toContain("Courtney");
    expect(removeSNames(names)).toContain("Wes");
    expect(removeSNames(names)).toContain("Capt. America");
  });
  it("SHOULD account for differences in case (for first letter of name, ie: 'Scott' v 'scott') and delete BOTH", () => {
    const names = ["Scott", "Courtney", "Wes", "scott", "Capt. America"];
    expect(removeSNames(names)).not.toContain("Scott");
    expect(removeSNames(names)).not.toContain("scott");
  });
});
