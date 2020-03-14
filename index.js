'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

function multi(numbers){
  let result = 1;
  for (let x of numbers) {
    result *= x;
  }
  return result;
}

module.exports = { add, multi };
