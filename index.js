'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    let result = 1; // 0掛けすると0を返すため、1を格納
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};
