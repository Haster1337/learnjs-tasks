function shuffle(arr){
  let tempArr = arr.concat(); // временный массив для удаления и добавления в новый массив чисел
  let min = 1;
  let max = tempArr.length;
  let rand;
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
    rand = Math.floor(min + Math.random() * (max + 1 - min)) - 1; // рандомное число в диапазоне от 0 до max - 1
    newArr.push(tempArr[rand]); // Добавляем этот элемент в массив
    tempArr.splice(rand, 1);
    max = tempArr.length; // уменьшаем max, можно было заменить и max--
  }

  for(let i = 0; i < arr.length; i++){
    arr[i] = newArr[i]; // перезаписываем исходный массив
  }

  return arr;
}
/*проверка "рандомности" этого алгоритма*/

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

/*
Результаты:
  123: 166326
  132: 166537
  213: 166536
  231: 166770
  312: 167010
  321: 166821
*/