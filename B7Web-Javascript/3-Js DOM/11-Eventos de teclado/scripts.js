
const input = document.querySelector("input");

function apertou() {
  console.log("Apertou");
  input.style.border = "10px solid green";
}

function segurou() {
  console.log("Segurou");
  input.style.border = "10px solid red";
}
function soltou() {
  console.log("Soltou");
  input.style.border = "10px solid yellow";
}
//da para adicionar no documento inteiro
document.addEventListener("keyup", soltou);
