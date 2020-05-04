'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(value) {
  let result = 1;
  for (let val of value) {
    result = result * val;
  }
  return result;
}
module.exports = { add, multi };
