'use strict';

/* ---------------------------------
add 関数の定義
------------------------------------*/
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

/*-------------------------------------
ここから multi 関数
--------------------------------------*/
function multi(numbers) {
  let result = 1;
  for (let i of numbers) {
    result = result * i;
  }
  return result;
}

module.exports = { add };
module.exports = { multi };
