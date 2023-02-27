let num = prompt("Введите число");
breakPoint:
for(let i = 1; i <= num; i++){
  if(i === 1){
    continue;
  }
  for(let j = 1; j < i; j++){
    if(j === 1){
      continue;
    }
    if(i % j === 0){
      continue breakPoint;
    }
  }
  alert(i);
}