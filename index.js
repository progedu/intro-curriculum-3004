'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(nums) {
  let result = 1;
  for (const num of nums) {
    result *= num;
  }
  return result;
}

module.exports = { add, multi };