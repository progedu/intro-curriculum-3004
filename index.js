'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers){
    let result = 1;
    for(let multi of numbers){
        result = result * multi;

    }
    return result;

}
module.exports = {
    add: add,
    multi: multi
};
