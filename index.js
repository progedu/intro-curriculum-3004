'use strict';

/**
 * 整数の配列を足し合わせた結果を返す
 * @param {Array} numbers 整数の配列
 * @returns {Number} 結果
 */
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 整数の配列を掛け合わせた結果を返す
 * @param {Array} numbers 整数の配列
 * @returns {Number} 結果
 */
function multi(numbers) {
  if (numbers.length === 0)
  {
    return 0;
  }
  let result = 1;
  numbers.forEach(number => {
    result *= number;
  });
  return result;
}

module.exports = { add, multi };
