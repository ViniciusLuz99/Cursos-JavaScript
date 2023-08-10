const clicou = () => {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  //com += ele adiciona mais uma linha
  ul.innerHTML += "<li>Item Alterado</li>";

  //innerHTML conteudo interno
  //outerHTML conteudo interno + o elemento, troca o elmento inteiro
};
