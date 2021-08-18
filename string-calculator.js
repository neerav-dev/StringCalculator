const Add = function (inputString) {
  
  if (inputString.length === 0) {
    return 0;
  }
  
  const controlCode = '//';
  let delimiter = ',';
  let numbers = '';
  let sum = 0;

  if (inputString.startsWith(controlCode)) {
    const inputs = inputString.split('\n');
    delimiter = inputs[0].substr(2);
    numbers = inputs[1];
    
  } else {
    numbers = inputString;
  }

  const number_arr = numbers.split(delimiter);
  number_arr.map(num => sum += Number(num));
  
  return sum;
};

module.exports = Add;