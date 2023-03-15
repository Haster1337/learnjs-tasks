function printList(list){
  console.log(list.value);
  if(list.next !== null){
    printList(list.next)
  }
}

function printListLoop(list){
  let listCopy = Object.assign(list);
  while(listCopy){
    console.log(listCopy.value);
    listCopy = listCopy.next;
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);