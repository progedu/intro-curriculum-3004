'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
<<<<<<< HEAD

function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};
=======
module.exports = { add };
>>>>>>> 51b1a284dac5fc8aae308e8c7456515f72c127fd
