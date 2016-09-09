'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers){
    return numbers.reduce((a, b) => {return a * b});
}

module.exports = {
    add: add,
    multi: multi
};
