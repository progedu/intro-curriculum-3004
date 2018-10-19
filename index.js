'use strict';
function add(numbers) {
    let result;
    result = numbers.reduce((a, b) => a + b);
    return result;
}
function multi(numbers) {
    let result;
    result = numbers.reduce((a, b) => a * b);
    return result;
}
module.exports = {
    add: add,
    multi: multi
};
