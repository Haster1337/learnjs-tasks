function throttle(func, ms) {
  let isThrottled = false;
  let args, functionThis;

  function decorator() {
    if (isThrottled) {
      args = arguments;
      functionThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function() {
      isThrottled = false;
      if (args) {
        decorator.apply(functionThis, args);
        args = null;
        functionThis = null;
      }
    }, ms);
  }

  return decorator;
}