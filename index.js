'use strict';
function add(numbers) { // 引数numbersは配列を受け取る
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
module.exports = {
    add : add,
    multi : multi
};
