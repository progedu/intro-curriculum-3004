'use strict';

function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}

function multi(numbers) {
    let res = 1;
    for (const num of numbers) {
        res *= num;
    }
    return res;
}

module.exports = {
    add : add,
    multi : multi
};