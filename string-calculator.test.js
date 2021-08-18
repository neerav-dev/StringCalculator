const add = require('./string-calculator');

describe('String Calculator', () => {
  it('Empty string should return 0', () => {
    expect(add('')).toBe(0);
  });

  it('Return type should be integer', () => {
    expect(add('1,2,5')).not.toBeNaN();
  });

  it('Return 8 when "1,2,5"', () => {
    expect(add('1,2,5')).toBe(8);
  });


  it('Handle newline in input format', () => {
    expect(add("1\n,2,3")).toBe(6);
    expect(add("1,\n2,4")).toBe(7);
  });
});