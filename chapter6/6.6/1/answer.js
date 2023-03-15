 function makeCounter() {
    let count = 0;

    function counter() {
      return count++;
    }

    counter.set = function (num) {
      return count = 10;
    }

    counter.decrease = function () {
      return count--;
    }

    return counter;
}