button.addEventListener("click", () => alert("1")); // этот

button.removeEventListener("click", () => alert("1")); // а этот ничего не удалит)) потому что функция
                                                       // должна быть в отдельной переменной

button.onclick = () => alert(2); // и этот