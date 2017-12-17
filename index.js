'use strict';
//sum：足し算
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
module.exports = {
    add: add
};

//multiplication：掛け算
function multi(numbers) {
let result = 0;
if (numbers.length === 0) {
return result;
}
result = numbers[0];
for (let i = 1; i < numbers.length; i++) {
result = result * numbers[i];
}
return result;
}

module.exports = {
add: add,
multi: multi
};
