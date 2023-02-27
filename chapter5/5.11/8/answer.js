function formatDate(date) {
  let nowDate = Date.now();
  let difference = nowDate - date.getTime();
  if(difference <= 1000){
    return "прямо сейчас";
  } else if(difference <= 1000 * 60){ // в одной минуте 60 секунд
    return `${Math.round(difference / 1000)} сек. назад`;
  } else if(difference <= 1000 * 3600){ // в одном часе 3600 секунд
    return `${Math.round(difference / (1000 * 60))} мин. назад`;
  } else {
    let day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
    let month = (date.getMonth() + 1).toString().length === 1 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let hours = date.getHours().toString().length === 1 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes();
    return `${day}.${month}.${date.getFullYear() % 100} ${hours}:${minutes}`;
  }
}