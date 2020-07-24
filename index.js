'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
const multi = (nums) => {
  let result = 1;
  for (let num of nums) {
    result = result * num;
  }
  return result;
}
module.exports = { add, multi };
