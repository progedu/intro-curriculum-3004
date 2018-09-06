'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(nubers) {
    let result = 1;
    for (let num of nubers) {
        result = result * num;
    }
}

module.exports = {
    add: add,
    multi: multi
};
