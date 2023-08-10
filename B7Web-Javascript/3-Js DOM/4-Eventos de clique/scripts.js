const clicou = () => {
  //funcao clicou
  alert("Clicou no butao");
};

//sem onclick no HTML
let botao = document.querySelector(".botao1");
botao.addEventListener("click", () => {
  clicou();
});
// .addEventListener adiciona um "escutador de evento"
