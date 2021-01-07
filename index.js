//配列の中身をすべて足し合わせて返す関数
'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
module.exports = { add };

//配列の中身をすべて掛けあわせて返す関数を定義
function multi(number) {
  let result = 1; // ここが 0 だと掛け算がうまくいかなかった
  for (let num of number) {
    result = result * num;
  }
  return result;
}
module.exports = { multi };