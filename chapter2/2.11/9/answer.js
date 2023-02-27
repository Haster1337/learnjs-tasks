let login = prompt("Кто там?");

if(login === "" || login === null){
  alert("Отменено");

} else if(login === "Админ"){
  let password = prompt("Пароль?");

  if(password === "" || password === null){
    alert("Отменено");
  } else if(password === "Я главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }

} else {
  alert("Я вас не знаю");
}