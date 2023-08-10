document.getElementsByName("div");
//nao tem longe a mais eficiente

document.getElementById("test");
//mais especifico por ID

document.getElementsByClassName("botao");
//mais especifico por Classe

//
document.querySelector("#test");
document.querySelector(".botao");
document.querySelector("h1");
//pode-se ate entrar em camadas como no CSS
document.querySelectorAll("#test ul li");
//querySelectorALL retorna um array eo normal so o elemento