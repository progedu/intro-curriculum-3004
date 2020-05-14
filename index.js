'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    let result = 1; // 初期値は0にすると、結果も0になる
    for (let num of numbers) {
        result *= num
    }
    return result;
}


module.exports = {
    add,
    multi
};
