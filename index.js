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

module.exports = { add, multi };
//module.exports = { add };
//module.exports = { multi };
//という書き方をしていたら、addモジュールを正常に呼び出せなかったので、
//モジュールのエクスポートの表記は上記のように1行にまとめて表記する。
