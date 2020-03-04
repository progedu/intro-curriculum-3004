'use strict';
function multi(numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}
module.exports = { add: multi };
