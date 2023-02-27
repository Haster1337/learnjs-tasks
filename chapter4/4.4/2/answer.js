let calculator = {
  read() {
    this.first = +prompt("First");
    this.second = +prompt("Second");
  },
  sum(){
    return this.first + this.second;
  },
  mul(){
    return this.first * this.second;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );