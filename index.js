'use strict'
function add(numbers){
    let result = 0;
    for (let num of numbers){ //配列numbersの要素数分ループし、先頭要素から順に取り出す
        result = result + num;
    }
    return result;
}

function multi(numbers){
    let result = 0;
    for (let num of numbers){ //配列numbersの要素数分ループし、先頭要素から順に取り出す
        console.log('!num:' + num +'/result:' + result);
        if(!result){ //resultが初期値=0の場合のみ、num値をセット
            result = num;
        }else{
            result = result * num;
        }
    }
    return result;
}

module.exports = {
    add : add,
    multi : multi
}