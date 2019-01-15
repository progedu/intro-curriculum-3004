"use strict";
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

const multi = numbers => numbers.reduce((x, y) => x * y);
// console.log(multi([4, 5, 6]) === 120);

module.exports = {
  add: add,
  multi: multi
};
