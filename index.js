'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

const multi = numbers => numbers.reduce((a, b) => a * b);
module.exports = { add, multi };
