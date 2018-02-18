'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
};

function multi(numbers) {
    let i = 1;
    for (let num of numbers){
        i = i * num;
    }
    return i;
}
module.exports = {
    add : add,
   multi: multi
};