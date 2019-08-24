'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers) { //ここから追加分です！
  let result = 1;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = { add, multi };
