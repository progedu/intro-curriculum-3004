'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
function multi(numbers) {
  if (numbers.length === 0) {
    return;
  }
  let result = 1;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}
module.exports = {
  add,
  multi,
};
