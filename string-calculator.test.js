const add = require('./string-calculator');

test('Empty string should return 0', () => {
  expect(add('')).toBe(0);
});