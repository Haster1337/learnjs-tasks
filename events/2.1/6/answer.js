let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  let btn = document.createElement("button");
  btn.textContent = "[x]"
  btn.classList.add("remove-button");
  btn.onclick = () => pane.remove();
  pane.insertAdjacentElement("afterbegin", btn);
}