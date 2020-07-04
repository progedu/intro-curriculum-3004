'use strict';

function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

function multi(numbers) {
  let result = 0;
  
  for (let i = 0; i < numbers.length; i++)
  {
    if (i === 0){
      result = numbers[i];
    }
    else
    {
      result = result * numbers[i];
    }
  }
  
  return result;
}

module.exports = { add, multi };
