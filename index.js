'use strict';
/**
 * 配列の中身をすべて足し算して数値で返却します
 * @param {Array} numbers
 * @returns {Number}
 */
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
/**
 * 配列のべき乗を計算
 * @param {Array} numbers 正の整数の配列
 * @return {number}
 */
function pow(numbers ) {
  let result = 1;
  for (let num of numbers) {
    result = result ** num;
  }
  return result;
}
module.exports = { add, multi, pow };
