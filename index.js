'use strict';

//add関数
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

//multi関数
function multi(numbers){
  let result = 1;
  for (let num of numbers){
    result = result * num;
  }
  return result;
}

//module.exportsオブジェクトのプロパティとして関数を定義
module.exports = { add, multi };
