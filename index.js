'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
function multi(nums) {
    let rst = 1;
    for (let num of nums) {
        rst *= num;
    }
    return rst;
}
module.exports = {
    add: add,
    multi: multi
};
