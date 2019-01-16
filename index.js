'use strict';
function add(numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}
function multi(numbers) {
    return numbers.reduce((acc, cur) => acc * cur);
}
module.exports = {
    add: add,
    multi: multi
};
