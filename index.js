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

module.exports = {
    add: add,
    multi: multi
};

// console.log(add([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(multi([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const assert = require('assert');
assert.equal(
    add([1, 2, 3, 4]),
    10,
    `error: 値が違います! 出力された値: ${add([1, 2, 3, 4])}`
);
assert.equal(
    multi([1, 2, 3, 4]),
    24,
    `error: 値が違います! 出力された値: ${multi([1, 2, 3, 4])}`
);
console.log(`すべてのテストを通過しました`);