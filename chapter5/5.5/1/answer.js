function camelize(str){
  let arr = str.split("-");
  arr = arr.map((item,index) => {
    if(index !== 0){
      item = item[0].toUpperCase() + item.slice(1);
    }
    return item;
  })
  return arr.join("");
}
