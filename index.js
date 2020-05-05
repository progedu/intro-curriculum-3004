'use strict';
//配列で渡された整数の総和を返す関数
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
};

//配列で渡された整数を全てかけ合わせて返す関数
function multi(numbers) {
  let result = numbers[0];
  for (let num of numbers) {
    result = result * num;
  }
  return result;
};

module.exports = { add, multi };
