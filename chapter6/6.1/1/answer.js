function sumTo(n) {
  return n === 0 ? n : n + sumTo(n - 1);  // рекурсия; третий по скорости
}
function sumToLoop(n){ // второй по скорости
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

function sumToFormula(n){ // первый по скорости
  return n * (1 + n) / 2;
}

