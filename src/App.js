/**
 * * Video #1:
 * Here, we export our first function for testing ...
 */
// export const helloFunction = () => "hello";
// This first version will fail our test because of the lower-case 'h'
export const helloFunction = () => "Hello"; // This second version will pass ...

/**
 * * Video #2:
 * Here, we export our first function for testing ...
 */
export const addFunction = (x, y) => {
  // if (typeof x === "string" || typeof y === "string") {
  //   return null;
  // }
  /**
   * * Problem:
   * The first version of our conditional is too narrow/isn't narrow enough - if we pass a hash or other objects to our function, this conditional wont trigger (because it's *only* asking if 'x' or 'y' "is a *string*?")
   * We need to make the conditional more focused, so we instead ask "Is either argument *not* a number? If so, return 'null' - otherwise, return the arguments' sum"
   */
  if (typeof x !== "number" || typeof y !== "number") {
    return null;
  }
  return x + y;
};
