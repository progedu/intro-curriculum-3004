'use strict';
function multi(numbers) {
    let result = numbers[0];    
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}
module.exports = {
    multi: multi
};
