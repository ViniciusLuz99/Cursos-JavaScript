const clicou = () => {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  //adicionando mais itens, de forma correta e otimizada (sem o inerHTML que refaz toda a lista)
  let newLi = document.createElement("li");
  newLi.innerText = "Item Adicionado no final da lista";
  ul.appendChild(newLi); //adiciona no final

  let newLiC = document.createElement("li");
  newLiC.innerText = "Item Adicionado no começo da lista";
  ul.prepend(newLiC); //adiciona no começo

  //adiciona no item 1(0) no final um texto
  ul.children[0].append("(Adicionado no final do texto)");
  //append so funciona para texto
};
