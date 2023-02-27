function Calculator(){
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  }

  this.calculate = function(str) {

    let arr = str.split(" ");
    let a = +arr[0];
    let operator = arr[1];
    let b = +arr[2];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }

}
