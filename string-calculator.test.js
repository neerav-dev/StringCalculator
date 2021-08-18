const add = require('./string-calculator');

describe('String Calculator', () => {
  test('Empty string should return 0', () => {
    expect(add('')).toBe(0);
  });

  test('Return type should be integer', () => {
    expect(add('1,2,5')).not.toBeNaN();
  });

  it('Return 8 when "1,2,5"', () => {
    expect(add('1,2,5')).toBe(8);
  });
});


