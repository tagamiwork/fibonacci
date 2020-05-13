'use strict';
const memo = new Map(); // 連想配列
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }// if

    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}// fib()

const length = 100;
for (let i = 0; i <= length; i++) {
    console.log(i + '番目:' + fib(i));
}// for


/* 再起を繰り返す処理が遅いアルゴリズム
function fib(n) {
   if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }// if-else
    return fib(n - 1) + fib(n - 2);
}// fib()
*/
