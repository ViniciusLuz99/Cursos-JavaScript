function myLocalScope() {
  // Altere apenas o código abaixo desta linha
  const myVar = "2";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Executar e verificar o console
// myVar não está definida fora do myLocalScope
console.log('outside myLocalScope', myVar);

/*
Conhecer o escopo local e funções
Variáveis que são declaradas dentro de uma função, assim como parâmetros das funções, possuem escopo local. Isso significa que elas são visíveis apenas dentro da função.

Aqui está uma função myTest com uma variável local chamada loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
A chamada da função myTest() vai exibir a string foo no console. A linha console.log(loc) (fora da função myTest) vai lançar um erro, já que loc não foi definido fora da função.*/