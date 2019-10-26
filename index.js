'use strict';
function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}
module.exports = {
    multi: multi
};
