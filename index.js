'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
//multi 整数を全て掛け合わせる関数
function multi(numbers) {
  let result = 1;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}
module.exports = { add, multi };