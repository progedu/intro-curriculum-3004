'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
<<<<<<< HEAD
module.exports = {
    add: add
};

function multi(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}
module.exports = {
    multi: multi
};
=======
module.exports = { add };
>>>>>>> 51b1a284dac5fc8aae308e8c7456515f72c127fd
