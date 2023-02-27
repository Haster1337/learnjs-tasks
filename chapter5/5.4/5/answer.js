function getMaxSubSum(arr){
  const sumArr = [];
  let sum;
  let prevNum;
  let negativeQuantity = 0;

  for(let k = 0; k < arr.length; k++){

    if(arr[k] < 0){
      negativeQuantity++; // находит количество отрицательных элементов
    }

  }

  if(negativeQuantity !== arr.length){ // если их количество неравны, то имеет смысл найти комбинации сумм

    for(let i = 0; i < arr.length; i++){ // вычисляет комбинацию сумм чисел и момент, когда стоит прервать вычисления
      sum = arr[i];

      for(let k = i + 1; k < arr.length; k++){

        if(arr[k] > 0){
            sum += arr[k];
        } else {
          prevNum = arr[k];
          k++;

          if(arr[k] > prevNum && arr[k] > 0 && sum + prevNum + arr[k] > sum){
            sum += (prevNum + arr[k]);
          } else {
            break;
          }

        }

      }

      sumArr.push(sum);
    }

  } else {
    return 0;
  }

  let max = sumArr[0];

  for(let i = 1; i < sumArr.length; i++){ // сравнивает суммы и находит максимальную

    if(max < sumArr[i]){
      max = sumArr[i];
    }

  }

  return max;

}

// это реализация медленного алгоритма