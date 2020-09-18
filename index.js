'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

//multi関数追加　配列で渡された整数を全て掛けあわせて返す関数を定義

function multi(numbers) {
  let result = 1;//掛け算なので1代入に注意
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}
/**
 * 配列のべき乗を計算
 * @param {Array} numbers 正の整数の配列
 * @return {number} 
 
function pow(base ,numbers){
  let result =base;
  for (let num of numbers) {
    result= result** num;
  }
  return result;
}

おまけなのでコメントアウト*/

// おまけの配列のべき乗の計算用　module.exports = { add, multi ,pow };
module.exports = { add, multi };