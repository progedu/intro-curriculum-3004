'use strict';
// addモジュール
function add(numbers) {
    let result = 0;
    for(let num of numbers) {
        result = result + num;
    }
    return result;
}
// multiモジュール
function multi(numbers) {
    let result = 1;
    for(let num of numbers) {
        result = result * num;
    }
    return result;
}
// 他のモジュールからでもアクセスできる
module.exports = {
    add: add,
    multi: multi
}
