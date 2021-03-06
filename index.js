'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
function mult(multi){
  let result = 0;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}
module.exports = { 
  add: add,
  mult: mult
};
