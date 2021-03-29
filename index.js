'use strict';
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
 * おまけ  べき乗の計算
 * @param {Array} numbers 正の整数の配列
 * @return {Number} 
 */
function pow(numbers){
  let result = 2;
  for (let num of numbers) {
    result = result ** num; // べき乗は**
  }
  return result;
}

module.exports = { add, multi, pow };
