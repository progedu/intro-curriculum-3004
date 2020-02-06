'use strict';

let add = (numbers) => {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

let multi = (numbers) => {
  let result = 1;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
};

module.exports = { add, multi };
