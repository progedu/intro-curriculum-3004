'use strict';
function multi(numbers) {
    let i = 1;
    for (let num of numbers){
        i = i * num;
    }
    return i;
}
module.exports = {
    multi: multi
};