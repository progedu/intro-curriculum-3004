'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
function multi (numbers) {
    let RESULT　= 1;
    for (let num of numbers) {
        RESULT = RESULT * num;
    }
    return RESULT;
}
module.exports = {
    add: add,
    multi: multi
};
