function getAverageAge(users){
  let sum = users.reduce((sum, current) => sum + current.age, 0);
  return sum / users.length;
}
