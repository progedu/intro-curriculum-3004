'use strict';
//足し算
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}
//引き算
function sub(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result - num;
    }
    return result;
}
//掛け算
function multi(numbers) {
    let result = 0;
    for (let num of numbers) {
	    if(result === 0){
		    result = num;
	    }else{
        	result = result * num;
	    }    
	}
    return result;
}
//割り算
function div(numbers) {
    let result = 0;
    for (let num of numbers) {
        if(result === 0){
		    result = num;
	    }else{
        	result = result / num;
	    }  
    }
    return result;
}
module.exports = {
    add : add,
    sub : sub,
    multi : multi,
    div : div
};
