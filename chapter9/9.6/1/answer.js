function A() {}
function B() {}

A.prototype = B.prototype = {}; // причина в равенстве прототипов, сравнение происходит не классов, а их прототипов

let a = new A();

alert( a instanceof B ); // true