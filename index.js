'use strict';
/**
 * 配列で渡された整数をすべて足し合わせて返す関数です。
 * @param {Array} numbers
 * @returns {Number}
 */
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

/**
 * 配列で渡された整数をすべて掛け合わせて返す関数です。
 * @param {Array} numbers
 * @returns {Number}
 */
function multi(numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}
module.exports = { add, multi };
