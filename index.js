'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(number) {
    let result = 1;
    for (let num of number) {
        result *= num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};
