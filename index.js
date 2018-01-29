'use strict';

// add　配列の中の整数をすべてを足し合わせる
// multi　配列の中の整数をすべて掛け合わせる

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


module.exports = {
    add: add,
    multi: multi
};
