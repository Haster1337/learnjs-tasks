it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
// Это считается плохой практикой, т.к. один тест проверял несколько вещей,
// также неявно указаны входные данные и результат.
// Лучше переписать вот так:

describe("Возводит число(x) в степень n",function() {
  it("Возводит 5 в первую степень", function () {
    assert.equal(pow(5, 1), 1);
  });

  it("Возводит 5 во вторую степень", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("Возводит 5 в третью степень", function () {
    assert.equal(pow(5, 3), 125);
  });
});
