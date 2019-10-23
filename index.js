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
    if (!numbers) {
        return 0;
    }
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};

console.assert(multi([1, 2, 5]) === 10, "掛け算の結果が正しくありません:" + "expected: 10, but got " + multi([1, 2, 5]));
console.assert(multi() === 0, "空入力に対して答えが0ではありません")
