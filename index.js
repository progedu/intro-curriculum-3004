'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
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
 * @return {numbers}
 */
function pow(base, numbers) {
  let result = base;
  for (let num of numbers) {
    result = result ** num;
  }
  return result;
}

module.exports = { add , multi, pow };
