let ul = document.querySelector("ul");
document.body.append(ul);
let liText;
do {
  liText = prompt("Введите содержимое для списка");
} while (liText){
  let li = document.createElement("li");
  li.textContent = liText;
  ul.append(li);
}