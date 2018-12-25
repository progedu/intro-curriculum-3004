'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}
function div100(numbers) {
    let result = 100;
    for (let num of numbers) {
        result = result / num;
    }
    return result;
}
function div(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = result / numbers[i];
    }
    return result;
}
module.exports = {
    add : add,
    multi : multi,
    div100 : div100,
    div : div
};
