'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 配列の中身を全て掛け合わせて、数値で返す関数
 * @param {Array} ary
 * @return {Number}
 */
function multi(ary) {
  let result = 1;
  for(let a of ary) {
    result *= a;
  }
  return result;
}

module.exports = { add, multi };