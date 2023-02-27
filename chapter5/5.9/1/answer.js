function sumSalaries(obj){
  return Object.values(obj).reduce((accum, current) => accum + current, 0);
}

