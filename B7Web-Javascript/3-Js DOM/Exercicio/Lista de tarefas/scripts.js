const input = document.querySelector("input");
const lista = document.querySelector("ul");

const listaDeTarefas = () => {
  function enter(event) {
    if (event.key === "Enter") {
      const newLi = document.createElement("li");
      newLi.innerText = input.value;
      lista.appendChild(newLi);
      input.value = "";
    }
  }
  input.addEventListener("keyup", enter);
};
listaDeTarefas();
