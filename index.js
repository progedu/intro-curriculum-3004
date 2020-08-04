'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
/**
 * 配列で渡された整数を全て掛け合わせて返す
 * @param {*} numbers 
 */
function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

module.exports = { add, multi };
