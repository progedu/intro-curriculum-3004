'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers){
  return numbers.reduce((acc, cur) => acc * cur);
}
module.exports = { add, multi };
