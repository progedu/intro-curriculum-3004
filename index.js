'use strict';
/**
 * 配列の中身をすべてを足し算して数値で戻す
 * @param {Array} numbers 
 * @return {Number}
 */
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 配列の中身をすべて掛け算して数値で戻す
 * @param {Array} numbers 
 * @return {Number}
 */
function multi(numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}
module.exports = { add, multi };
