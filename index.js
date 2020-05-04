'use strict';

function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
// module.exports = { add };

function mult(numbers) {
  let result = 1;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}
module.exports = { add, mult };
