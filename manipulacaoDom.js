//botão
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", () => {
  alert("Você clicou no botão!");
  botao.innerText = "Clicado";
  botao.style.backgroundColor = "white";
});
//
// Evento de clique para criar um novo elemento
document
  .getElementById("botaoCriarElemento")
  .addEventListener("click", function () {
    const novoElemento = document.createElement("article");
    novoElemento.innerText = "Novo elemento criado!";
    document.getElementById("novoElementoContainer").appendChild(novoElemento);
  });

// Evento de clique para modificar o conteúdo de um elemento
document
  .getElementById("botaoModificarConteudo")
  .addEventListener("click", function () {
    const elemento = document.getElementById("meu-elemento");
    elemento.innerText = "Novo conteúdo!";
  });

// Evento de clique para modificar o conteúdo usando innerHTML
document
  .getElementById("botaoModificarHTML")
  .addEventListener("click", function () {
    const meuElementoComHTML = document.getElementById("elemento-com-html");
    meuElementoComHTML.innerHTML = "<strong>Texto em negrito</strong>";
  });
// Função para adicionar um novo elemento ao final do article atual
function adicionarElemento() {
  const novoElemento = document.createElement("article");
  novoElemento.innerText = "Novo elemento criado!";
  document.getElementById("articleAppend").appendChild(novoElemento);
}

// Função para adicionar um novo elemento no início do article atual
function adicionarElementoNoInicio() {
  const novoElemento = document.createElement("article");
  novoElemento.innerText = "Novo elemento criado no início!";
  document.getElementById("articlePrepend").prepend(novoElemento);
}

// Função para remover o elemento do article atual
function removerElemento() {
  const elementoParaRemover = document.getElementById("elementoParaRemover");
  elementoParaRemover.remove();
}

// Evento de clique para adicionar elemento ao final
document
  .getElementById("btnAppend")
  .addEventListener("click", adicionarElemento);

// Evento de clique para adicionar elemento no início
document
  .getElementById("btnPrepend")
  .addEventListener("click", adicionarElementoNoInicio);

// Evento de clique para remover elemento
document.getElementById("btnRemove").addEventListener("click", removerElemento);
