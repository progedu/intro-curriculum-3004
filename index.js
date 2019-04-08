'use strict';

function add(numbers) { // アッド関数を作る。引数はナンバーズ。配列をナンバーズに渡すと、add(足すという意味)する関数。
    let result = 0; // 0 から、
    for (let num of numbers) { // 配列をループして、
        result = result + num; // 足して、
    }
    return result; // リターンする関数。
}

function multi(numbers) { // マルチ関数を作る。引数はナンバーズ。配列をナンバーズに渡すと、multi(掛けるという意味？)する関数。
    let result = 1; // 0 から、
    for (let num of numbers) { // 配列をループして、
        result = result * num; // 掛けて、
    }
    return result; // リターンする関数。
}

module.exports = { // モジュールエクスポーツ
    add : add, // add と言うプロパティ名で、add 関数を登録している。
    multi : multi // multi と言うプロパティ名で、multi 関数を登録している。
}; // この 4 行を作ると、他のモノからも、この add 関数と multi 関数が使える様になる。
