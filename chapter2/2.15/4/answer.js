function pow(x, n) {
  if(n < 1 || n * 10 % 10 !== 0) { // проверка на натуральное число, т.е. >0 и не является дробным
    return "n не является натуральным числом";
  }

  return x ** n;
}

let x = prompt("Введите x", "");
let n = prompt("Введите n", "");

alert(pow(x, n));