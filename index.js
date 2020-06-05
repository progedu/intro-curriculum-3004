'use strict';
const add = numbers => {
    let result = 0;
    numbers.forEach(number => {
        result += number;
    });
    return result;
}

const multi = numbers => {
    let result = 1;
    numbers.forEach(number => {
        result *= number;
    });
    return result;
}
module.exports = { add, multi };
