'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}
module.exports = { add };

console.log(s.multi([1, 2, 3, 4]));