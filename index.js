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

console.log(add([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(multi([1, 2, 3, 4, 5, 6, 7, 8, 9]));


module.exports = {
    add: add,
    multi: multi
};
