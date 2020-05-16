'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
function multi(numbers){
  let result =1;
  for(let num of numbers){
    result = result * num;
  }
  return result
}
module.exports = { add ,multi};
//module.exports = {add}
//module.exports = {multi}
//のようにすると後ろの multi のみが反映されてしまう