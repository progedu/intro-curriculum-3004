"use strict"
function add(numbers) {
    let result = 0;
    for (let i of numbers) {
        result += i;
    }
    return result
}
function multi(numbers) {
    let result = 1;
    for (let i of numbers) {
        result *= i;
    }
    return result
}

module.exports = {
    add: add,
    multi: multi
};