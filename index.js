'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
function multi(num) {
    let result = 1;
    for (let n of num) {
        result = result * n;
    }
    return result;
}
module.exports = { add , multi };
