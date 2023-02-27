function getLocalDay(date){
  let weekDay = date.getDay();

  if(weekDay === 0){
    return 7;
  }
  return weekDay;
}