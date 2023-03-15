/*function fib(n){
  let fibb = 1;
  let num = 1;
  let prev = 0;

  for(let i = 3; i <= n; i++){
    prev = fibb;
    fibb += num;
    num = prev;
  }
  return fibb;
}*/

function fib(n){
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}