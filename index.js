'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
function multi(numbers) {
    return numbers.reduce((pre,cur)=>{
        return pre * cur;
    },1)
}


module.exports = {
    add: add,
    multi, multi
};
