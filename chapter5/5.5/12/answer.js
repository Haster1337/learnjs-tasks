function unique(arr){
  const newArr = [arr[0]];
  targetLoop:
    for(let i = 1; i < arr.length; i++) {
      for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] === arr[i]) continue targetLoop;
      }
      newArr.push(arr[i]);
    }
  return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O