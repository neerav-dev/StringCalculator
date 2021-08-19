const Add = function (inputString) {
  
  if (inputString.length === 0) {
    return 0;
  }
  
  const controlCode = '//';
  let delimiter = ',';
  let delimiters = [','];
  let numbers = '';
  let negativeNumbers = [];
  let sum = 0;

  if (inputString.startsWith(controlCode)) {
    const inputs = inputString.split('\n');
    delimiters = inputs[0].substr(2).split(delimiter);
    numbers = inputs[1];
  } else {
    numbers = inputString;
  }

  let regexp = new RegExp(`[${delimiters}]`);

  const number_arr = numbers.split(regexp);

  number_arr.filter(n => n !== '').map(num => {
    const number = Number(num);
    if (number > 0) {
      if (number <= 1000) {
        sum += number;
      }
    } else {
      negativeNumbers.push(num);
    }
  });
  

  if (negativeNumbers.length > 0) {
   throw `Negatives not allowed, [${negativeNumbers.toString()}].`;
  }

  return sum;
};

module.exports = Add;