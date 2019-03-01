'use strict';
function multi(numbers) { // 足し算 add 掛け算 multi
    let result = 1; // 足し算 0 掛け算 1
    for (let num of numbers) {
        // result = result + num;　// 足し算
        result = result * num; // 掛け算
    }
    return result;
}
module.exports = {
    // add: add // 足し算
    multi : multi // 掛け算
};
