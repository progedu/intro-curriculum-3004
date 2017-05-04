'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
function multi(numbers) {
    if(numbers.length === 0) return 1;
    let number = numbers.shift(); 
    return number * multi(numbers);
}
module.exports = {
    add: add,
    multi: multi
};
