function add() {
  let count = 0; // variavel de escopo local, so tem acesso nessa funcao
  count++ //encrementa + 1
}
add();
add();
console.log(count) //vai dar erro pois a variavel esta dentro da função
//mas se por a variavel para fora da funcao ela ira mostrar o resultado (variavel de escopo global)
//