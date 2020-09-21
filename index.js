'use strinct';
function add(numbers){
    let result = 0;
    for (let num of numbers){
        result = result + num;
    }
    return result;
}
function multi(numbers){
    let result = 0;
    for (let num of numbers){
        result = result * num;
    }
    return result;
}
gunction 
module.exports = {
    add : add,
    multi : multi
};