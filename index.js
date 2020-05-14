'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers) {
  if (numbers.length === 0)
  {
    return 0;
  }
  let result = 1;
  numbers.forEach(number => {
    result *= number;
  });
  return result;
}

module.exports = { add, multi };
