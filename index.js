'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
//module.exports = { add };



function multi(numbers){
  let result = 1;
  for (let number of numbers){ //ofでなくinだとインデックス番号がnumberに入る
    //console.log (number);
    result *= number;
  }
  
  return result;
}
module.exports = {add,multi};