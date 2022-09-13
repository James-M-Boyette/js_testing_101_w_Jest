#

## What did I learn?

#### Debugging the config & package.json files

- It may be a good idea going forward (when cloning a demo repo), to move the project's package.json file to a back-up folder, delete the node_modules folder, and re-install each module if errors occur

- It may also be a good idea to check and see if some errors are due to modules being updated to the `@` convention (`babel-core` to `@babel/core`)

#### Terminology:

- "Test Suites" are the various testing files in your project (each and every `_.test.js` and `_.spec.js` file)

- "Tests" are all of the tests declared in your Test Suite files
