const Add = function (numbers) {

  const number_arr = numbers.split(',');

  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  number_arr.map(num => sum += Number(num));
  
  return sum;
};

module.exports = Add;