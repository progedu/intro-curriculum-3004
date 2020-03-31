'use strict';
function multi(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}

function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
module.exports = {
  multi, add
}

