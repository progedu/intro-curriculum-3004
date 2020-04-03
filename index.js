'use strict';

{
  const add = numbers => {
    let result = 0;
    for (let num of numbers) {
      result += num;
    }
    return result;
  }

  const multi = numbers => {
    let result = 1;
    for (let num of numbers) {
      result *= num;
    }
    return result;
  }

  module.exports = { add, multi };
}