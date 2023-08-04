function gravidade() {
  console.log("A gravidade do planeta é:");
  console.log(9.8);
}

//Como usar a função?
gravidade(); //chamda da função

//Passando parâmetros em funções
function somar(numero1, numero2) {
  let result = numero1 + numero2;
  console.log("Resultado: " + result);
}
// 10 vai ser o numero1, e 50 o numero2
somar(10, 50);

function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("Bonieky", "Lacertda");
nomeCompleto("Joao", "Silva");
