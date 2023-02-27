function sumInput(){
  const arr = [];
  while(true){
    let num = prompt("Введите число", 0);
    if(num === "" || num === null || !isFinite(num)){
      break;
    }
    arr.push(num);
  }
  let sum = 0;
  for(let value of arr){
    sum += value;
  }
  return sum;
}


