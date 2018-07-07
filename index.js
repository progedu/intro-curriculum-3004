'use strict';
// 引数numbersで受け取った数を、その数分だけ足し合わせる
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
// 引数numbersで受け取った数を、その数分だけ掛け合わせる
function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}
// 関数を他の所でも使えるようにエキスポートする
module.exports = {
    add: add,
    multi: multi
};
