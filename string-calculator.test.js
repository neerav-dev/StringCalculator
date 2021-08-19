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

  it('Support custom delimiter', () => {
    expect(add("//;\n1;3;4")).toBe(8);
    expect(add("//$\n1$2$3")).toBe(6);
    expect(add("//@\n2@3@8")).toBe(13);
  });

  it('Negative number throw exception: "Negatives not allowed"', () => {
    try {
      add("//;\n1;2;-5");
    } catch (error) {
      expect(error).toBe("Negatives not allowed, [-5].");
    }

    try {
      add("//;\n1;2;-5;3;-4");
    } catch (error) {
      expect(error).toBe("Negatives not allowed, [-5,-4].");
    }
  });

  it('Ignore number larger then 1000', () => {
    expect(add("2,1001")).toBe(2);
    expect(add("//;\n1;3;4;1000")).toBe(1008);
  });

  it('Delimiters can be arbitrary length', () => {
    expect(add("//***\n1***3***4***1000")).toBe(1008);
    expect(add("//@@\n1@@3@@4@@1000")).toBe(1008);
  });

  it('Allow for multiple delimiters', () => {
    expect(add("//$,@\n1$2@3")).toBe(6);
  });

  it('Allow multiple delimiters of arbitrary length', () => {
    expect(add("//$$,@@\n1$$2@@3")).toBe(6);
  });
});