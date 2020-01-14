'use strict';
const multi = (numbers) => {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}
module.exports = { multi };
