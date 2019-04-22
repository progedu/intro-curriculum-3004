'use strict';
function add(numbers) {
  let result = 0;
  const errorMessage = "add関数の引数の配列には、整数のみを入力してください。"
  
  for (let num of numbers) {
    //数字以外の入力ができないように、number以外はエラーを返す
    if (typeof num != "number"){
      return errorMessage + "  : "　+ num;
    }
    //整数以外の入力ができないように、小数点とマイナスの記号が含まれていた場合にエラーを返す
    if (num.toString().indexOf(".") != -1 || num.toString().indexOf("-") != -1 ){
      return errorMessage + "  : "　+ num;
    }
    result = result + num;
  }
  return result;
}

function multi(numbers) {
  let result = 1;
  const errorMessage = "multi関数の引数の配列には、整数のみを入力してください。"
  
  for (let num of numbers) {
    //数字以外の入力ができないように、number以外はエラーを返す
    if (typeof num != "number"){
      return errorMessage + "  : "　+ num;
    }
    //整数以外の入力ができないように、小数点とマイナスの記号が含まれていた場合にエラーを返す
    if (num.toString().indexOf(".") != -1 || num.toString().indexOf("-") != -1 ){
      return errorMessage + "  : "　+ num;
    }
    result = result * num;
  }
  return result;
}



module.exports = {
  add, multi
};
