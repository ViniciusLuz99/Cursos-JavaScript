/*Comparar com o operador menor que
O operador menor que (<) compara os valores de dois números. Se o número à esquerda for menos que o número à direita, retornará true. Caso contrário, retorna false. Assim como o operador de igualdade, o operador menor que converte os tipos de dados enquanto compara.

Exemplos

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Adicione o operador menor que para indicar as linhas para que a instrução de retorno faça sentido.

*/
function testLessThan(val) {
  if (val < 25) {  // Altere esta linha
    return "Under 25";
  }

  if (val < 55) {  // Altere esta linha
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);