'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}


function multi(numbers){
    let result = 1; //0が最初だと結果が0になる
    for (let num of numbers){
        result = result * num
    }
    return result;
}
module.exports = {
    add : add, //複数を示すのにカンマが必要
    multi : multi
};