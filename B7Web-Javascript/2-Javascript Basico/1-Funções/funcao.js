//Criar a função
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
somar(10, 50); // 10 vai ser o numero1, e 50 o numero2

//Retorno da função
//Entrada -> Processamento -> Saida
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`; // returno
}

nomeCompleto("Bonieky", "Lacertda"); //não esta sendo armazenada
let completo = nomeCompleto("Bonieky", "Lacertda"); //agora sim esta sendo armazenada e tem um valor sendo retornado
console.log(completo)