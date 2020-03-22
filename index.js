'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(array){
    let result = 1;
    for (let i of array){
        result = result * i;
    }
    return result;
}

module.exports = { add, multi };
