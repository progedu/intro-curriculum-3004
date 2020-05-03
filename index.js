'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers) {
  let product = 1;
  for (let num of numbers) {
    product = product * num; 
  }
  return product;
}
module.exports = { add , multi};