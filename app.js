'use strict';
function fib(n) {
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }// if-else
    return fib(n - 1) + fib(n - 2);

}// fib()

const length = 40;
for (let i = 1; i <= length; i++) {
    console.log(i + '番目:' + fib(i));
}// for

