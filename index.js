'use strict';

function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

//特定の関数をモジュールとして公開する場合に、 
//module.exports オブジェクトのプロパティとして関数を登録します。
//sumパッケージに add メソッドが追加されました
module.exports = {
    add : add,
    multi : multi
};



//コード修正⇒再インストｰルすること
//cd インストｰルしたdir
//npm uninstall sum
//npm install 修正したフォルダ/このファイル
