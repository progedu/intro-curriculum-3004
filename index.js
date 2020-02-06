'use strict';
function multi(numbers) {
    let result1 = 0;
    let result2 = 1;
    for (let num of numbers) {
        result1 = result1 + num;
        result2 = result2 * num;
        //console.log(result1);
        //console.log(result2);
    }
    return `${result1}, ${result2}`;
}

module.exports = {multi};
