function clicou() {
  const test = document.querySelector("#teste");
  const ul = test.querySelector("ul");

//item antes do ul
  let newUl = document.createElement("ul");

  for(let i = 1; i<5; i++){
    let newLi = document.createElement("li");
    newLi.innerText = `Item ${i}`;
    newUl.append(newLi);
  }
  ul.before(newUl);

  //item depois do UL
  let newButton = document.createElement("button");
  newButton.innerHTML = "Botao novo";

  ul.after(newButton);
}
//after : depois
//before : antes
