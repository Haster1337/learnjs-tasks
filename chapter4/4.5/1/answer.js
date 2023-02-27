/*
Возможно ли создать функции A и B, чтобы new A() == new B()?
function A() { ... }
function B() { ... }
Да, для этого достаточно сделать так, чтобы возвращаемое значение было одинаково, скажем:
*/
let obj = {};

function A(){
  return obj;
}

function B(){
  return new A(); // или тоже вернуть obj
}

let a = new A();
let b = new B();

alert( a === b ); // true