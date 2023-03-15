function debounce(func, ms){
  let timer = false;
  return function(){
    if(timer) return;
    func.apply(this, arguments);
    timer = true;
    setTimeout(() => timer = false, ms);
  }
}