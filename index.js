'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    const m = function (x, y) {
        return x * y;
    };
    return numbers.reduce(m, 1);
}

module.exports = {
    add: add,
    multi: multi
};
