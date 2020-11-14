'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers) {
  let result = 1;
  if (!numbers.length) {
    return "値がありません";
  }
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = { add, multi };
