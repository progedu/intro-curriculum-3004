'use strict';

/**
 * 合計値を計算する
 * @param {*} numbers 
 */
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

/**
 * 階乗値を計算する
 * @param {*} numbers 
 */
function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};
