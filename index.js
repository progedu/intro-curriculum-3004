'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

/**
 * 与えられた数値を全て掛け合わせる関数
 * @param {Array.<Number>} numbers - 掛け合わせる数値
 * @returns {Number} 掛け合わされた数値
 */
function multi(numbers) {
    let result = 1;
    // numbers 引数の値を全て掛け合わせる
    for (let num of numbers) {
        result *= num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};
