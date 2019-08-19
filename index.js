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
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}
// function multiTest() {
//   const assert = require("assert");
//   assert.equal(multi([1, 2, 3, 4]), 10, `multi([1, 2, 3, 4]=10, but ${multi([1, 2, 3, 4])}`);
//   assert.equal(multi([1, 2, 3, 4]), 24, `multi([1, 2, 3, 4]=24, but ${multi([1, 2, 3, 4])}`);
// }
// test();
module.exports = { add, multi };