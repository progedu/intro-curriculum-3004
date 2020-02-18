'use strict';

function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers) {
  let results = 1;
  for (let num of numbers) {
    results = results * num;
  }
  return results;
}

module.exports = {
    add: add,
    multi: multi
};