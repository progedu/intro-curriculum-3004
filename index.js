'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    let result2 = 1;
    for (let num of numbers) {
        result2 = result2 * num;
    }
    return result2;
}


module.exports = {
    add: add
};

module.exports = {
    multi: multi
};