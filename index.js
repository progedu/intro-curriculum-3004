'use strict';
// 配列で渡された整数を全て足し合わせる
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
// 配列で渡された整数を全てかけ合わせる
function multi(numbers) { 
  let result = 1;
  for (let num of numbers) { 
    result = result * num;
  }
  return result;
}
module.exports = { add,multi };
