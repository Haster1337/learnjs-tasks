function printReverseList(list){
  if(list.next !== null){
    printReverseList(list.next);
  }
  console.log(list.value);
}

function printReverseListLoop(list){
  let listCopy = Object.assign(list);
  let arr = [];
  while(listCopy){
    arr.push(listCopy.value);
    listCopy = listCopy.next;
  }
  for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}