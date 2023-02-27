function Calculator() {
  this.read = function(){
    this.firstNum = +prompt("First number", 0);
    this.secondNum = +prompt("Second number", 0);
    return this;
  };
  this.sum = function(){
    return this.firstNum + this.secondNum;
  };
  this.mul = function(){
    return this.firstNum * this.secondNum;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );