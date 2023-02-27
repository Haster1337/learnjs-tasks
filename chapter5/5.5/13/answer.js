function groupById(arr){
  return arr.reduce((accum, current) => {
    accum[current.id] = current;
    return accum;
  }, {})
}
