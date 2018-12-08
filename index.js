'use strict';

function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

module.exports = {
    add : add
};

function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        if (num === 0) {
            result = 0;
            return result;
        }
        result = result * num;
    }
    return result;
}

module.exports = {
    multi : multi
};