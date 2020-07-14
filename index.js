'use strict';
function multi(array) {
  let result = 1;
  for (let num of array) {
    result = result * num;
  }
  return result;
}
module.exports = { multi };
