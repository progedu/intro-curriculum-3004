'use strict';
'use strict'
/**
 * 配列の中身を全て足し算して数値で返却します。
 * @param {Array} numbers 
 * return {Number}
 */
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num; 
    }
    return result;
}

/**
 * 配列の中身を全て掛け算して返します
 * @param {Array} numbers 
 * return {Number}
 */
function multi(numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}
module.exports = {add, multi};
