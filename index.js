'use strict';

function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

const multi = numbers => {
    let result = 1;
    for (const num of numbers) {
        result *= num;
    }
    return result;
};
// module.exports = {
//     add : add
// };

module.exports = { add, multi };