function sum(a) {
  let currentSum = a;

  function func(b) {
    currentSum += b;
    return func;
  }

  func.toString = function() {
    return currentSum;
  };

  return func;
}