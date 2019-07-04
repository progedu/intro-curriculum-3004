'use strict'

function add(numbers) {

    let result = 0;

    for (let num of numbers) {
        result = result + num;
    }
    return result;

}

function multi(numbers) {

    let result = 1;	// 0だとnumbersが0のとき答えが0になる

    for (let num of numbers) {
        result = result * num;
    }
    return result;

}

// 特定の関数をモジュールとして公開する場合の決まった方法
// module.exportsオブジェクトのプロパティとして関数を登録
module.exports = {
    add: add,	// sumパッケージにaddメソッドを追加
    multi: multi	// sumパッケージにmultiメソッドを追加
};
