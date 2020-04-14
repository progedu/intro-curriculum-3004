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

  // for (var i = 0; i < numbers; i++) {
  //   result = result * numbers;
  // }
  for (let num of numbers) {
    result = result * num;
  }

  return result;
}

module.exports = {
  add,
  multi
};