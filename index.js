'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(input_array) {
  let result = 1;
  for (let num of input_array) {
    result = result * num;
  }
  return result;
}

module.exports = { add ,multi};