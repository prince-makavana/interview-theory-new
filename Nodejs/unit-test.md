## Tools
- Sonarqube

## Library
- Jest
- Mocha
- Chai

1) What is assertions?
   - Jest offers different built in functions to verify the expect behaviour of your code.
   - toBe - check strictly ===
   - toEqual - check deep equality like object
   - toBeTruthy - check if value is truthy
   - toBeFalsy - check if value is falsy

Ex.

function add(a, b) {
  return a + b;
}

test('adds two numbers correctly', () => {
  const result = add(2, 3);
  expect(result).toBe(5); // Assertion using Jest's expect function
});