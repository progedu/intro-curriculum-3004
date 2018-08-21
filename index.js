'use strict';
let multi = (numbers) => {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

let add = (numbers) => {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};
