function printNumbers(from, to){
  let num = from;
  let timer = setInterval(function(){
    console.log(num);
    if(num === to){
      clearInterval(timer);
    }
    num++
  }, 1000);
}

function printNumbersTimeout(from, to){
  let num = from;
  let timer;
  setTimeout(function print(){
    console.log(num);
    if(num !== to){
      setTimeout(print, 1000);
    }
    num++;
  }, 1000);
}