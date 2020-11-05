'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(a) {
    let result = 1;
    for (let b of a){
        result = b * result;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};