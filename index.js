'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
module.exports = { add };

function multi(n) {
  let result = 0;
  for (let number of n) {
    result = result * number;
  }
  return result;
}
module.exports = { multi };
