'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
function multi(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }
    return result;
}
module.exports = { add, multi };

const assert = require('assert');
assert.equal(multi([1]), 1, `expected:1 return:${multi([1]) }`);
assert.equal(multi([0]), 0, `expected:0 return:${multi([0]) }`);
assert.equal(multi([1, 2, 0]), 0, `expected:0 return:${multi([1, 2, 0]) }`);
assert.equal(multi([0, 1, 2]), 0, `expected:0 return:${multi([0, 1, 2]) }`);
assert.equal(multi([1, 2, 3, 4]), 24, `expected:24 return:${multi([1, 2, 3, 4]) }`);
assert.equal(multi([1, -2, 3]), -6, `expected:-6 return:${multi([1, -2, 3]) }`);
assert.equal(multi([-1, -2, -3, -4]), 24, `expected:24 return:${multi([-1, -2, -3, -4]) }`);
assert.equal(multi([]), null, `expected:null return:${multi([]) }`);

