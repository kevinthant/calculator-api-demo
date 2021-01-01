const { equal } = require("assert");
const add = require("../src/add").default;

describe('Core function test suite', () => {
  it('should add numbers correctly', () => {
    equal(add(2, 3), 5);
  });

  it('intentionally failing with division by zero', () => {
    const num1 = 2/0;
    const num2 = 3;
    equal(add(num1, num2), 5);
  });
});