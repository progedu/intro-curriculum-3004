'use strict';
/* 足し算される
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

/* multi関数で、掛け算させる */
function multi(numbers){
    let result = 1;
    for(let num of numbers){
        result = result * num;
    }
    return result;
}


module.exports = {
    add: add,
    multi: multi
};

