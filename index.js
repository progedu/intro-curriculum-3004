'use strict';
/**
	* 配列で渡された整数を全て足しあわせて返す関数
	* @param {number[]} numbers  - 配列で渡された整数
	* @return {number} result  - 足しあわせた結果の値
*/
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
/**
	* 配列で渡された整数を全て掛けあわせて返す関数
	* @param {number[]} numbers  - 配列で渡された整数
	* @return {number} result  - 掛けあわせた結果の値
*/
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
