'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
/**
 * 整数の配列を受け取り全てを掛け合わせた数値を返す
 * @param {Array} numbers 
 * @return {Number}
 */
function multi(numbers) {
    if (numbers.length === 0) return undefined;
    let result = 1;
    for (let n of numbers) {
        result *= n;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};
// 高階関数
function multiHOF(numbers) {
    if (numbers.length === 0) return undefined;
    return numbers.reduce((acc, x) => acc * x);
}
// 再帰
function multiRec(numbers) {
    if (numbers.length === 0) return undefined;
    if (numbers.length === 1) return numbers[0];
    return numbers[0] * multiRec(numbers.slice(1));
}
// 末尾再帰
function multiTail(numbers) {
    function loop(acc, numbers) {
        if (numbers.length === 0) return undefined;
        if (numbers.length === 1) return acc * numbers[0];
        return loop(acc * numbers[0], numbers.slice(1));
    }
    return loop(1, numbers);
}
// テスト
const assert = require('assert');
assert(multi([]) === undefined);
assert(multi([10]) === 10);
assert(multi([1, 2, 3, 0]) === 0);
assert(multi([1, 2, 3, 4]) === 24);

assert(multiHOF([]) === undefined);
assert(multiHOF([10]) === 10);
assert(multiHOF([1, 2, 3, 0]) === 0);
assert(multiHOF([1, 2, 3, 4]) === 24);

assert(multiRec([]) === undefined);
assert(multiRec([10]) === 10);
assert(multiRec([1, 2, 3, 0]) === 0);
assert(multiRec([1, 2, 3, 4]) === 24);

assert(multiTail([]) === undefined);
assert(multiTail([10]) === 10);
assert(multiTail([1, 2, 3, 0]) === 0);
assert(multiTail([1, 2, 3, 4]) === 24);
