'use strict';
module.exports.add = function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
module.exports.multi = function multi(numbers) {
  let result2 = 1;
  for (let num of numbers) {
    result2 = result2 * num;
  }
  return result2;
}
