'use strict';
function add(data) {
    let result = 0;
    for (let value of data) {
        result = result + value;
    }
    return result;
}
function multi(data) {
    let result = 1;
    for (let value of data) {
        result = result * value;
    }
    return result;
}
module.exports = {
    add: add,
    multi: multi
};
