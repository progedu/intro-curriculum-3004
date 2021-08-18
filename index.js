"use strict";
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

// require('sum')  としているのは、sum ライブラリを読み込むためです。
// sum というラブラリを作成したのでそれを読み込んでいます。

// intro-curriculum-3004はフォルダー名で、ライブラル名が npm init した時にきめます。以下の　URL から package.json ファイルを見て見ますと、name: 'sum'  となっているのが確認できるかと思います。
