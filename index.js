'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers) {
  let result = 1;
  for (let num of numbers) {
    let result = result * num;
  }
}
console.log(multi([4, 5, 6]));
module.exports = { 
  add: add,
  multi: multi
 };
