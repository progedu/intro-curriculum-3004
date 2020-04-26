'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

let multi = n => {
    let m = 1;
    let i = 0;
    while(i < n.length) {
        m *= n[i];
        i++;
    }
    return m;
}

module.exports = {
    add: add,
    multi: multi
};
