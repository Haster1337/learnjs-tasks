function spy(func){

  function decorator(...args){
    decorator.calls.push(args);
    return func.apply(this, args);
  }

  decorator.calls = [];

  return decorator;
}